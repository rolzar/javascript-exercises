const findTheOldest = function(event) {
   return event.sort((a,b) =>{
        const older = yearsLived(a.yearOfBirth,a.yearOfDeath);
        const younger = yearsLived(b.yearOfBirth,b.yearOfDeath);
        return older < younger ? 1 : -1;
    })[0];



};

function yearsLived(start, end){
    if(!end){
        end = new Date().getFullYear();
    }

    return end - start
}


// Do not edit below this line
module.exports = findTheOldest;
