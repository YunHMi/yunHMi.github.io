// window.onload=function(){
//     /* 변수선언 */
//     let design_a = document.querySelectorAll('.project_design a')
//     let design_full = document.querySelectorAll('.project_design .full')
//     let design_full_x = document.querySelectorAll('.project_design .full .close')

//     let nav_a = document.querySelectorAll('nav a')
//     let bg = document.querySelectorAll('.bg')
//     console.log(nav_a, bg)

//     //초기 _full 모두 숨기기
//     for(let s of design_full){s.style.display='none'}
//     for(let s of sns_full){s.style.display='none'}

//     //design_a 개별 클릭 시 관련한 design_full출력되기
//     design_a.forEach(function(t, i){
//         t.addEventListener('click',function(e){
//             e.preventDefault()
//             this.nextElementSibling.style.display = 'block'
//         })
//     })

//     //창 닫기 클릭 시 design_full 숨기기
//     design_full_x.forEach(function(t, i){
//         t.addEventListener('click',function(e){
//             e.preventDefault()
//             this.parentNode.style.display = 'none'
//         })
//     })
//     //창 닫기 클릭 시 sns_full 숨기기
//     sns_full_x.forEach(function(t, i){
//         t.addEventListener('click',function(e){
//             e.preventDefault()
//             this.parentNode.style.display = 'none'
//         })
//     })
//     //nav_a 클릭시 각 bg위치로 이동하기
//     nav_a.forEach(function(t,i){
//         t.addEventListener('click',function(e){
//             e.preventDefault()
//             window.scrollTo(0, bg[i].offsetTop)
//         })
//     })
// }//onload end
