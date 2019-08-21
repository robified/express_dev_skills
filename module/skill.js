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
    skillOne
};

function skillOne(id) {
    return skills[id];
};

function getAll() {
    return skills;
};