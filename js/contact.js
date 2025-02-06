
let myName = 'KEA';
const myOtherName = 'CPHBusiness';
// document.getElementById('frmContact')
// document.getElementsByClassName()

// e / event 
// powerpoint - JavaSCript Variables 
// document.querySelector('frmContact').addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Get all elements 
//     const name = e.target.textName.value;

//     alert('Your name is ' + name);
// });

// // Variable scope
// function showText(text) {
//     let intro = 'Your text is: '

//     let moreText = '';
//     for (let index = 0; index < 10; index++) {
//         moreText += index;
//     }
//     alert(index);
//     alert(intro + text + moreText);
// }
// showText('Hello');


// const
// function showText(text) {
//     const intro = 'Your text is: '

//     let moreText = '';
//     for (let index = 0; index < 10; index++) {
//         moreText += index;
//     }
//     intro += text + moreText
//     alert(intro);
// }
// showText('Hello');



document.querySelector('#frmContact').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get all elements 
    const name = e.target.txtName.value;
    const email = e.target.txtEmail.value;
    const comments = e.target.txtComments.value;

    const submittedInfo = `
        Thank you for your message. We will get back to you shortly.

        Rehestred infromation:
        - Name: ${name}
        - Email: ${email}
        - Comments: ${comments}
    `;
    
    alert(submittedInfo);

    // Bliver sendt tilbage til index (homepage) 
    window.location.replace('index.html');
});
