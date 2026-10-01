var titles = document.getElementsByClassName('titles');

console.log(Array.isArray('titles'));
console.log(Array.isArray(Array.from('titles')));

Array.from(titles).forEach(function(items){
    console.log(items);

});
