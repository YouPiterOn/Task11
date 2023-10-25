

class Item
{
    constructor(name, property) {
        this.name = name;
        this.property = property;
    }
}

var arr = [new Item("Book", "interesting"), new Item("Mouse", "small"), new Item("Car", "red")];

function Startup()
{
    VisualiseArray(arr);
}

function VisualiseArray(array)
{
    $("ul").children('li').remove();
    array.forEach(element => {
        $('ul').append("<li>"+element.name+" : "+element.property+"</li>")
    });
}

function Shuffle()
{
    arr = _.shuffle(arr);
    VisualiseArray(arr);
}
function Sort()
{
    arr = _.orderBy(arr, ['name', 'property']);
    VisualiseArray(arr);
}
function DeleteLast()
{
    arr = _.initial(arr);
    VisualiseArray(arr);
}
function DeleteFirst()
{
    arr = _.tail(arr);
    VisualiseArray(arr);
}
function Add(name, property)
{
    arr.push(new Item(name, property))
    VisualiseArray(arr);
}
function RemoveByName(name)
{
    _.remove(arr, function(element){ return element.name == name});
    VisualiseArray(arr);
}
function RemoveByProperty(property)
{
    _.remove(arr, function(element){ return element.property == property});
    VisualiseArray(arr);
}
function Double()
{
    var arr2 = arr.slice(0);
    arr.push(arr2);
    arr = _.flatten(arr);
    VisualiseArray(arr);
}
function Unique()
{
    arr = _.uniq(arr);
    VisualiseArray(arr);
}