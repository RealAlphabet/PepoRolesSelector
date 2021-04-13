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
//  ROLES SELECTOR
////////////////////////////////////////////


export default class extends React.Component {

    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.state = {
            selected    : new Set(),
            search      : ""
        };
    }

    //  INPUT

    onFocus() {
        this.input.current.focus();
    }

    onType({ target }) {
        this.setState({
            search: target.innerText.toLowerCase()
        });
    }

    //  ROLES

    onSelect(role) {
        this.state.selected.has(role)
            ? this.state.selected.delete(role)
            : this.state.selected.add(role);

        this.props.onSelect(this.state.selected, role);
        this.input.current.focus();
        this.forceUpdate();
    }

    //  RENDER

    render() {
        let search = this.props.roles.filter(role => {
            return this.state.selected.has(role.id) == false && role.name.toLowerCase().includes(this.state.search)
        });

        let selected = this.props.roles.filter(role => {
            return this.state.selected.has(role.id);
        });

        return (
            <div className="role-selector">
                <div className="role-selector-base" onClick={this.onFocus.bind(this)}>
                    {selected.map(({ id, name, color }, i) => {
                        color = colorToRGB(color);

                        return (
                            <div className="role-selector-inline" style={{ borderColor: color }} onClick={this.onSelect.bind(this, id)} key={i}>
                                <div className="role-selector-circle" style={{ backgroundColor: color }} />
                                <span>{name}</span>
                            </div>
                        );
                    })}

                    <div className="role-selector-input" contentEditable="true" onInput={this.onType.bind(this)} ref={this.input} />
                </div>

                <div className="role-selector-list">
                    {search.map(({ id, name, color }, i) => {
                        color = colorToRGB(color);

                        return (
                            <div className="role-selector-role" onClick={this.onSelect.bind(this, id)} key={i}>
                                <div className="role-selector-circle" style={{ backgroundColor: color }} /> {name}
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}
