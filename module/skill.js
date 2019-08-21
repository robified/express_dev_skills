const skills = [
    {skill: 'Git'},
    {skill: 'JavaScript'},
    {skill: 'HTML'},
    {skill: 'CSS'},
    {skill: 'jQuery'},
    {skill: 'Node.js'},
    {skill: 'Express'},
    {skill: 'MongoDB'}
];

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    return skills[id];
};

function getAll() {
    return skills;
};