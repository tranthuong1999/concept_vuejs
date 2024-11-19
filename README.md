*1. Cách đăng ký componet trong vuejs(*)
   Vue component : biết chính xác mà noi nó sử dụng 
   1. Locally : tức là chỉ sử dụng được trong compoenent cha
   2. Globally : sử dụng cho toàn bộ ứng dụng 
*2.Single-File Components(*)
(*1).What(*)
Là 1 format file đặc biệt cho phép bạn đóng gói logic, template , style in 1 file duy nhất
Có 3 phần : template , script: defind data , mehtod , computed , propeties , style
(*2).Where(*)
(*3).Why(*)
Encapsulation : Tránh ảnh hưởng đến nhau
Reusability : Tái sử dụng component
Scoped Styling : Ngăn chặn stype bị leak và conflic

*3.What is props(*)

Là cách truyền dữ liệu tử compoent cha xuống component con
Composition API cung cấp 1 cách thay thế đê tạo component trong Vuejs
v-text : bind content with element
v-pre: dùng dể hiển thị nội dung thô
v-once : chỉ render content lần đầu tiên

*3.Rendering(*)


*4.Teleport (*)
la cách di chuyển content ra ngoài cây DOM giúp tạo sự linh hoạt trong việc hiển thị UI phức tạp











