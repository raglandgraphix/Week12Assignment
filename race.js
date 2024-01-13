

// Set my URL_ENPOINT
 let URL_ENDPOINT = 'http://localhost:3000/race';
//this reads my db.json so that it can populate my table. I have two tables one for a 100k race and one for a 50k rack
$.get('http://localhost:3000/race').then(data => {
    idValue = data.length+1;
    $.each(data,function(key,val){       
        const tableName = val.title;
// This builds the table for the 100k race
        if(tableName==='100k'){            
           $('#100kTable').append(`
            <tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.age}</td>
                <td>${val.city}</td>
                <td>${val.state}</td>
                <td><button class='remove' id="${val.id}" onclick="removeAthlete(${val.id})">&#128465;</button></td>
            </tr>
          `);
// This builds the table for the 50k race          
        }else if(tableName==='50k'){
            $('#50kTable').append(`
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.age}</td>
                    <td>${val.city}</td>
                    <td>${val.state}</td>
                    <td><button class='remove' id="${val.id}" onclick="removeAthlete(${val.id})">&#128465;</button></td>
                </tr>
            `);
        }
    });
});
//The following is the form and submission methods
$("#submit").on('click',function(e){
    //get the values
    const distance = document.querySelector('#distance').value;
    const name = document.querySelector('#fullName').value;
    const age = document.querySelector('#age').value;
    const city = document.querySelector('#city').value;
    const state = document.querySelector('#state').value;
    //sets a variable to that the proper title is set. Title isn't used but can be
    let raceDistance;
    if(distance==='100k'){
        raceDistance = '100,000 Kilometers';
    }else if(distance==='50k'){
        raceDistance = '50,000 Kilometers';
    }
    //post the values
    $.post(URL_ENDPOINT,
        {
            "distance": raceDistance,
            "title": distance,
            "name":name,
            "age":+age,
            "city":city,
            "state":state,
            "title": distance
        }
    );
});
//simple ajax delete
const removeAthlete = function(id){
    $.ajax(`${URL_ENDPOINT}/${id}`,{
        type: 'DELETE'
    });
};
//sets up and executes the update
const updateUser = function(){
    // get the values
    const id = document.querySelector('#raceId').value;
    const uname =  document.querySelector('#uname').value;
    const uage =  document.querySelector('#uage').value;
    const ucity =  document.querySelector('#ucity').value;
    const ustate =  document.querySelector('#ustate').value;
    const udistance =  document.querySelector('#udistance').value;
    // again sets a variable to that the proper title is set. Title isn't used but can be
    let raceDistance;
    if(udistance==='100k'){
        raceDistance = '100,000 Kilometers';
    }else if(udistance==='50k'){
        raceDistance = '50,000 Kilometers';
    }
    $.ajax(`${URL_ENDPOINT}/${id}`, {
        method:'PUT',
        data:{
            distance:raceDistance,
            title:udistance,
            name:uname,
            age:uage,
            city:ucity,
            state:ustate,
        }
    })  
}
// the method that listens for the event click for the update
const updateButton = document.querySelector("#updateAthlete");
updateButton.addEventListener('click',updateUser);