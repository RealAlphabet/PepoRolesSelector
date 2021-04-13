
////////////////////////////////////////////
//  ROLES
////////////////////////////////////////////


const roles = [{"id":"791743980777504789","name":"@everyone","permissions":"0","position":0,"color":0,"hoist":false,"managed":false,"mentionable":false},{"id":"792125975067885599","name":"🎓 Admin","permissions":"8053059543","position":10,"color":1,"hoist":true,"managed":false,"mentionable":true},{"id":"792126448780574770","name":"👨‍🚀 Support","permissions":"0","position":7,"color":3447003,"hoist":true,"managed":false,"mentionable":true},{"id":"792127562620076064","name":"✔","permissions":"6546640448","position":1,"color":3066993,"hoist":true,"managed":false,"mentionable":false},{"id":"794208701795139585","name":"⭐ Tester","permissions":"0","position":4,"color":15844367,"hoist":true,"managed":false,"mentionable":false},{"id":"795719870058332170","name":"L U M Z","permissions":"8","position":12,"color":16777215,"hoist":true,"managed":false,"mentionable":false},{"id":"802543382642950186","name":"🌠 Booster","permissions":"0","position":5,"color":16717987,"hoist":true,"managed":true,"mentionable":false,"tags":{"premium_subscriber":null}},{"id":"813743995317518377","name":"────────────","permissions":"0","position":11,"color":16777215,"hoist":false,"managed":false,"mentionable":false},{"id":"813744198045925386","name":"────────────","permissions":"0","position":8,"color":16777215,"hoist":false,"managed":false,"mentionable":false},{"id":"813744404682113055","name":"────────────","permissions":"0","position":3,"color":16777215,"hoist":false,"managed":false,"mentionable":false},{"id":"817101205377384458","name":"🌗 Staff","permissions":"7784624071","position":9,"color":1579032,"hoist":true,"managed":false,"mentionable":true},{"id":"823965659649015858","name":"🎁 Premium","permissions":"0","position":6,"color":16727100,"hoist":true,"managed":false,"mentionable":false},{"id":"824745223488798750","name":"Mute","permissions":"0","position":2,"color":5066061,"hoist":false,"managed":false,"mentionable":false}];


////////////////////////////////////////////
//  SELECTOR
////////////////////////////////////////////


function onSelect(state, changed) {
    console.log(state, changed);
}


////////////////////////////////////////////
//  MAIN
////////////////////////////////////////////


ReactDOM.render(
    React.createElement(RolesSelector, { roles, onSelect }, null),
    document.body
);
