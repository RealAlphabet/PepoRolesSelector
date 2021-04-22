import React from 'react';


////////////////////////////////////////////
//  UTILS
////////////////////////////////////////////


function colorToRGB(color) {
    let r       = (color >> 16) & 0xFF;
    let g       = (color >> 8)  & 0xFF;
    let b       = (color) & 0xFF;

    return `rgb(${r}, ${g}, ${b})`;
}


////////////////////////////////////////////
//  DISCORD ITEM SELECTOR
////////////////////////////////////////////


export default function (props) {
    const input                     = React.createRef();
    const [ selected ]              = React.useState(new Set());
    const [ search, setSearch]      = React.useState("");
    const [ , setState]             = React.useState();


    /////////////////////
    //  HELPERS
    /////////////////////


    const onFocus = () => {
        input.current.focus();
    };

    const onInput = () => {
        setSearch(input.current.innerText.toLowerCase());
    };

    const onBackspace = ({ key }) => {
        if (key == 'Backspace' && !input.current.innerText.length) {
            selected.delete([...selected].pop());
            setState({});   // Trigger force update.
        }
    };

    const onSelect = (role) => {
        if (selected.has(role)) {
            selected.delete(role);

        } else if (selected.size < props.limit) {
            selected.add(role);
        }

        setState({});       // Trigger force update.
        props.onSelect(selected, role);
        input.current.focus();
    };


    /////////////////////
    //  RENDER
    /////////////////////


    const itemsSelected = props.roles.filter((role) => selected.has(role.id));

    const itemsFound = (search.length)
        ? props.roles.filter((role) => !selected.has(role.id) && role.name.toLowerCase().includes(search))
        : [];

    return (
        <div className="role-selector">
            <div className="role-selector-base" onClick={onFocus}>
                {itemsSelected.map(({ id, name, color }, i) => {
                    color = colorToRGB(color);

                    return (
                        <div className="role-selector-inline" style={{ borderColor: color }} onClick={() => onSelect(id)} key={i}>
                            <div className="role-selector-circle" style={{ backgroundColor: color }} />
                            <span>{name}</span>
                        </div>
                    );
                })}

                <div className="role-selector-input" contentEditable="true" onInput={onInput} onKeyDown={onBackspace} ref={input} />
            </div>

            <div className="role-selector-list">
                {itemsFound.map(({ id, name, color }, i) => {
                    color = colorToRGB(color);

                    return (
                        <div className="role-selector-role" onClick={() => onSelect(id)} key={i}>
                            <div className="role-selector-circle" style={{ backgroundColor: color }} /> {name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
