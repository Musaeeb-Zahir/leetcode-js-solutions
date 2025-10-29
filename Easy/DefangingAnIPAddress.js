var defangIPaddr = function(address) {
const regex=/[\.]/g;
return address.replace(regex,"[.]")
};
console.log(defangIPaddr("1.212.4000"));
