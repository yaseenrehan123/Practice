function Person(name,age,gender,employmentStatus,profession,imgSrc){
    this.name = name,
    this.age = age,
    this.gender = gender,
    this.employment = {
        status: employmentStatus,
        profession: profession,
    },
    this.imgSrc = imgSrc

};
let personA = new Person('Ali Abdul',34,'male','employed','WebDev','images/avatars/avatar1.png');
let personB = new Person('James',18,'male','employed',"Mcdonald's employee",'images/avatars/avatar2.png');
let personC = new Person('Julia',20,'Female','employed',"Dentist",'images/avatars/avatar3.png');
const persons = [personA,personB,personC];
persons.forEach(function(person){
    createCard(person);
});
function createCard(Person){
    const container = document.querySelector('.card-container')

    const card = document.createElement('div');
    card.className = 'person-card';

    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    const avatar = document.createElement('div');
    avatar.className = 'card-avatar'

    const avatarImg = document.createElement('img');
    avatarImg.src = Person.imgSrc;
    
    const cardName = document.createElement('div');
    cardName.className = 'card-name';

    const nameText = document.createElement('h1');
    nameText.textContent = Person.name;

    const cardData = document.createElement('div');
    cardData.className = 'card-data';

    const ageText  = document.createElement('p');
    ageText.textContent = `Age: ${Person.age}`;

    const genderText  = document.createElement('p');
    genderText.textContent = `Gender: ${Person.gender}`;

    const employmentStatusText  = document.createElement('p');
    employmentStatusText.textContent = `Employment Status: ${Person.employment.status}`;

    const professionText  = document.createElement('p');
    professionText.textContent = `Profession: ${Person.employment.profession}`;

    const deleteCardBtn = document.createElement('div');
    deleteCardBtn.className = 'delete-card-button';
    deleteCardBtn.onclick = function(){
        const index = persons.indexOf(Person);
        if(index > -1){
            persons.splice(index, 1);
        }
        card.remove();

    }
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'bx bx-x';

    container.append(card);
    card.append(wrapper);
    wrapper.append(avatar, cardName, cardData,deleteCardBtn);
    avatar.append(avatarImg);
    cardName.append(nameText);
    cardData.append(ageText, genderText, employmentStatusText, professionText);
    deleteCardBtn.append(deleteIcon);

}
const newCardMenu = document.querySelector('.add-card-details-section');

function enableNewCardMenu(){
   // Check the current display style and toggle it
   if (newCardMenu.style.display === 'flex') {
    newCardMenu.style.display = 'none'; // Hide the menu
} else {
    newCardMenu.style.display = 'flex'; // Show the menu
}
}
const nameField = document.getElementById('card-name-field');
const ageField = document.getElementById('card-age-field');
const genderField = document.getElementById('card-gender-field');
const statusField = document.getElementById('card-status-field');
const professionField = document.getElementById('card-profession-field');

function addNewCard(){

    if(nameField.value === ''
        || ageField.value === ''
        ||genderField.value === ''
        || statusField.value === ''
        || professionField.value === ''
    ){
        alert('Please fill all the neccessary details!');
        return;
    }
    else if (statusField.value !== 'Employed' && statusField.value !== 'Unemployed'){
        alert("Status can only either be 'Employed' or 'Unemployed' ");
        return;
    }
    newPerson = new Person(nameField.value,ageField.value,genderField.value,statusField.value,professionField.value);

    createCard(newPerson);

    nameField.value = '';
    ageField.value = '';
    genderField.value = '';
    statusField.value = '';
    professionField.value = '';
}