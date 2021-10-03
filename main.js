name_of_the_student_array = [];
 displaynames=[];  
function submit()
{
 for(var i=1;i<=4;i++)
 {
names=document.getElementById("name_of_the_student_"+i).value;
name_of_the_student_array.push(names)

}
count=name_of_the_student_array.length;
for(var j=0;j<count;j++)
{
displaynames.push("<h4> NAME "+name_of_the_student_array[j]+"</h4>")

}
document.getElementById("display_name_with_commas").innerHTML=displaynames;
remove=displaynames.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove;
document.getElementById("submit_button").style.display="none"
document.getElementById("sort_button").style.display="inline-block"
    }

function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    var display_student_array_sorting = [];

    var lenght_of_name_of_students_array = name_of_the_student_array.length;
    console.log(lenght_of_name_of_students_array);

    for (var k = 0; k < lenght_of_name_of_students_array; k++)
    {
        display_student_array_sorting.push("<h4>NAME - " + name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }

    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}


//Additional activity
function new_update()
{
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" + name_of_the_student_array +"</h1>";
}