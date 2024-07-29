let Year = prompt ("Enter year: ");
if (Year % 4 == 0 && Year % 100 != 0 || Year % 400 ==0) {
    alert (`${Year}рік високосний`);
}
else {
    alert (`${Year}рік не високосний`);
}