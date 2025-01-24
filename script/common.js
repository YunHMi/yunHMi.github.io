//header & footer incolude을 위해 이벤트 추가
// function loadHTML(elementID, filePath) {
//     fetch(filePath)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Error loading ${filePath}`);
//             }
//             return response.text();
//             })
            
//             .then(data => {
//             document.getElementById(elementID).innerHTML = data;
//             })
//             .catch(error => {
//             console.error('Error:', error);
//             });
// }

// // 페이지 로드 시 header와 footer 추가
// window.addEventListener('DOMContentLoaded', () => {
//     loadHTML('header', 'layout/header.html');
//     loadHTML('footer', 'layout/footer.html');
// });
