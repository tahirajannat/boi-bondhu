import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

const passwordEncryption = async (pass) => {
  // bcrypt.genSalt(10, function (err, salt) {
  //   bcrypt.hash(pass, salt, function (err, hash) {
  //     // Store hash in your password DB.
  //     console.log(`🔥 ~ file: passwordEncryption.js ~ line 10 ~ hash`, hash);
  //   });
  // });
  const hashedPassword = bcrypt.hashSync(pass, '$2a$10$CwTycUXWue0Thq9StjUM0u'); // hash created previously created upon sign up
  return hashedPassword;
};

export { passwordEncryption };
