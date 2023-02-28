
const person = {
    firstName: 'Hadid',
    lastName: 'Ahmed'
}

const per = ({firstName,lastName}) => {
    console.log(`Hello ${firstName} ${lastName}`);
}

per(person);
