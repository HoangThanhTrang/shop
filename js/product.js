var page = 1;

// var apiProducts = [
//     {
//         id: 1,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/086bd817383547cd94abacc9017c4035_9366/pb-alwaysom-hen.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 2,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b750dc9e0b804ba386fcac8300558b9c_9366/%C3%A1o-thun-tennis-3-s%E1%BB%8Dc-club.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 3,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/767cd2eac8c845afb453accd01757be6_9366/%C3%A1o-polo-three-below-adicross.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 4,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e44ccd9dc2cb4275bdefacf50105a9dc_9366/%C3%A1o-hoodie-hulk-unisex.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 5,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3caf5de5847d48f0b798ad1a00bac03f_9366/%C3%A1o-hoodie-l%E1%BB%ADng-satin-tape-classics-adicolor.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 6,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/134ce71b3d534771a264aaab00f1094e_9366/%C3%A1o-hoodie-ba-l%C3%A1-adidas-adicolor.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 7,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 7,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 8,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 9,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 10,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 11,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 12,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 13,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 14,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 15,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 16,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 17,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 18,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 19,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 20,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 21,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 22,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
//     {
//         id: 23,
//         img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2193fa8fe8bb4f50b476ad5e00d76437_9366/track-top-c%C3%B3-m%C5%A9-d%E1%BB%87t-thoi-3-s%E1%BB%8Dc-future-icons-adidas-sportswear.jpg',
//         description: 'ADIDAS PERFORMANCE OWNTHE GAME 2.0 MENS SNEAKER CORE BLACK',
//         price: '1,449.99$'
//     },
// ]
$("#loadmore").click(function(){
    $("#products .box:hidden").slice(0,3).slideDown();
    if($("#products .box:hidden").length == 0){
        $("#loadmore").fadeOut("slow")
    }
})