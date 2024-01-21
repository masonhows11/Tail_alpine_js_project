// document.addEventListener('alpine:init', () => {
//         Alpine.data('dropdown', () => ({
//             open: false,
 
//             toggle() {
//                 this.open = ! this.open
//             }
//         }))
//  })

// document.addEventListener('alpine:init', () => {
//     Alpine.data('myData', () => 
//     ({
//         //// define property
//         message:'test apline from separate js file', 
//         //// define array named : my_array
//         my_array: ['hello','fucking','alpine js'],
//         //// define function
//         Myfunction()
//         { 
//             alert( this.message ) 
//         }
//     }))
// })

document.addEventListener('alpine:init', () => {
    Alpine.data('globalData', () => ({
       
        users : [],

        getUsers()
        {
                axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
                   this.users = res.data;
                   console.log(this.users);
                })
        }

    }))
})

