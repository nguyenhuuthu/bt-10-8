//1.Viết chương trình cộng hai số (Sử dụng Return)
// function tinh_tong(a, b)
// {
//     return a + b;
// };
// let a = parseInt(prompt("Nhập số a"));
// let b = parseInt(prompt("Nhập số b"));
// let tong = tinh_tong(a, b);

// alert("Tổng hai số " + a + " + " + b + " = " + tong);

//2.Tính tổng các số lẻ trong mảng. (Sử dụng Return)
// arr = [1, 2, 3, 4, 5, 6]
// function tong_so_le(arr) {
//     let tong = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 != 0) {
//             tong += arr[i];
//         }
//     }

//     return tong;
// }

// console.log("Tổng số lẻ là: " + tong_so_le(arr));


//3.Bài 3: Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn
//tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng. Nếu giá trị của
//tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.
// function sosanh(a,b){
//     if (a >b){
//         alert(`số ${a} lớn hơn số ${b}`);
//     }else if (a <=b){
//         let total = a + b;
//         console.log(total);
//     } 
// }sosanh( a,b);

//4.
// function addNumbers() {
//       firstNum = 4;
//       secondNum = 8;
//       result = firstNum + secondNum;
//     alert(result)
//       return result;

//     }
//     result = 0;
//     result = addNumbers();

//6.
// let a = Number(prompt("Nhap vao so a"))
// let check = 0
// function kiemTraSoNguyenTo(a) {
//    if (a === 2) {
//       alert("a là số nguyên tố")
//       return
//    } else {
//       for (let i = 2; i < a; i++) {
//          if (a % i === 0) {
//             alert("a không phải là số nguyên tố")
//             check = 1
//             break;
//          }
//       } if (check === 0) {
//          alert("A là số nguyên tố")
//          return
//       }
//    }
// }kiemTraSoNguyenTo(a)
// let b = "";
// for (let i = 0; i < 100; i++) {
//   if (isPrime(i) === true) {
//     b = b + "," + i;
//   }
// }
// console.log(b.replace(",", ""));


//Bài 5: Chuyển đổi giữa feet và meters

//Xây dựng hai phương thức sau:
//Chuyển đổi từ feet sang meters:
// function footToMeter(foot){
//     let footToMeter = 0.305;

// let number = prompt("nhap so vao ")
// number = parseFloat(number);

// let newNumber = number * footToMeter;
// console.log(newNumber); 
// }
// footToMeter()

//Chuyển đổi từ meters sang feet:
// function meterToFoot(meter){
//     let meterToFoot = 3.279;
//     let number = prompt("nhap so vao ")
// number = parseFloat(number);
// let newNumber = number * meterToFoot;
// console.log(newNumber);
// }
// meterToFoot();
//Công thức chuyển đổi như sau:

//meter = 0.305 * foot
//foot = 3.279 * meter




//bai 6 cách 2
// let number = Number(prompt("moi nhap so bat ki de kiem tra"));
// function isPrime(number) {
//   let state = true;

//   if (number < 2) {
//     state = false;
//   } else if (number === 2) {
//     state = true;
//   } else if (number % 2 === 0) {
//     state = false;
//   } else {
//     for (let i = 3; i < number - 1; i = i + 2) {
//       if (number % i === 0) {
//         state = false;
//         break;
//       }
//     }
//   }
//   if (state === true) {
//     console.log(`${number} la so nguyen to`);
//   } else {
//     console.log(`${number} ko phai so nguyen to`);
//   }
//   return state;
// }

// let a = "";
// for (let i = 0; i < 100; i++) {
//   if (isPrime(i) === true) {
//     a = a + "," + i;
//   }
// }
// console.log(a.replace(",", ""));