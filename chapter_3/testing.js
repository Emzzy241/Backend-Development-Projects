import bcryptjs from 'bcryptjs';

const hashedPassword = bcryptjs.hashSync('password', 8);
console.log(hashedPassword);


const passwordIsValid = bcryptjs.compareSync('password', hashedPassword)
console.log(passwordIsValid);