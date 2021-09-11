export const checkBudget =(budget, remaining) => {

    let myClass;

    if ((budget / 4) >= remaining) {
        myClass = 'alert alert-danger';
    } else if ((budget / 2) >= remaining) {
        myClass = 'alert alert-warning';   
    } else {
        myClass = 'alert alert-success';   
    }

    return myClass;

}

