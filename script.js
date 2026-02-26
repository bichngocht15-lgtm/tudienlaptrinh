document.addEventListener("DOMContentLoaded", function(){

    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        reveals.forEach(function(reveal) {
            const elementTop = reveal.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                reveal.classList.add("active");
            }
        });
    }

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);

});

document.addEventListener("DOMContentLoaded", function(){
    const searchInput = document.getElementById("searchInput");
    if(!searchInput) return;   // nếu không có thì dừng
    const cards = document.querySelectorAll(".card");
    searchInput.addEventListener("keyup", function(){
        let keyword = this.value.toLowerCase();
        cards.forEach(function(card){
            let text = card.textContent.toLowerCase();
            if(text.includes(keyword)){
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});



function showContent(type){

    const content = document.getElementById("contentDisplay");

    if(type === "bien"){
        content.innerHTML = `
            <h2>Biến và kiểu dữ liệu</h2>

            <p><strong>Biến (Variable):</strong> Biến (variable) là một vùng nhớ trong máy tính dùng để lưu trữ dữ liệu, và giá trị của nó có thể thay đổi trong quá trình chương trình chạy.</p>

            <h4>Kiểu dữ liệu cơ bản trong c++:</h4>
		    <table style="width:100%; border-collapse:collapse; background-color:white;border:1px solid #ccc">
			    <thead style="background-color:#f0f0f0;">
			        <tr>
			            <th font-weight: bold>Kiểu</th>
			            <th font-weight: bold;>Kích thước (thường gặp)</th>
			            <th font-weight: bold;>Miền giá trị</th>
			        </tr>
			    </thead>
			    <tbody>
			        <tr>
			            <td><span class="tag">int</span></td>
			            <td>4 byte</td>
			            <td>−2,147,483,648 → 2,147,483,647</td>
			        </tr>
			        <tr>
			            <td><span class="tag">unsigned int</span></td>
			            <td>4 byte</td>
			            <td>0 → 4,294,967,295</td>
			        </tr>
			        <tr>
			            <td><span class="tag">short</span></td>
			            <td>2 byte</td>
			            <td>−32,768 → 32,767</td>
			        </tr>
			        <tr>
			            <td><span class="tag">long long</span></td>
			            <td>8 byte</td>
			            <td>−9×10<sup>18</sup> → 9×10<sup>18</sup></td>
			        </tr>
			        <tr>
			            <td><span class="tag">float</span></td>
			            <td>4 byte</td>
			            <td>±3.4×10<sup>38</sup> (≈ 7 chữ số chính xác)</td>
			        </tr>
			        <tr>
			            <td><span class="tag">double</span></td>
			            <td>8 byte</td>
			            <td>±1.7×10<sup>308</sup> (≈ 15 chữ số chính xác)</td>
			        </tr>
			        <tr>
			            <td><span class="tag">char</span></td>
			            <td>1 byte</td>
			            <td>−128 → 127 (hoặc 0 → 255)</td>
			        </tr>
			        <tr>
			            <td><span class="tag">bool</span></td>
			            <td>1 byte</td>
			            <td><span class="tag">true</span> (1) hoặc <span class="tag">false</span> (0)</td>
			        </tr>
			    </tbody>
			</table>

            <h4>Kiểu dữ liệu cơ bản trong python:</h4>
            <table style="width:100%; border-collapse:collapse; background-color:white; border:1px solid #ccc;">
			    <thead style="background-color:#f0f0f0;">
			        <tr>
			            <th font-weight: bold>Kiểu</th>
			            <th font-weight: bold>Miền giá trị</th>
			            <th font-weight: bold>Ghi chú</th>
			        </tr>
			    </thead>
			    <tbody>
			        <tr>
			            <td><span class="tag">int</span></td>
			            <td>Không giới hạn (phụ thuộc RAM)</td>
			            <td>Số nguyên</td>
			        </tr>
			        <tr>
			            <td><span class="tag">float</span></td>
			            <td>±1.7×10<sup>308</sup></td>
			            <td>Số thực (≈ 15 chữ số chính xác)</td>
			        </tr>
			        <tr>
			            <td><span class="tag">bool</span></td>
			            <td><span class="tag">True</span> hoặc <span class="tag">False</span></td>
			            <td>Kiểu đúng / sai</td>
			        </tr>
			        <tr>
			            <td><span class="tag">str</span></td>
			            <td>Không giới hạn độ dài (tùy RAM)</td>
			            <td>Chuỗi ký tự</td>
			        </tr>
			        <tr>
			            <td><span class="tag">list</span></td>
			            <td>Không giới hạn (tùy RAM)</td>
			            <td>Danh sách</td>
			        </tr>
			        <tr>
			            <td><span class="tag">tuple</span></td>
			            <td>Không giới hạn (tùy RAM)</td>
			            <td>Bộ dữ liệu (không đổi)</td>
			        </tr>
			        <tr>
			            <td><span class="tag">dict</span></td>
			            <td>Không giới hạn (tùy RAM)</td>
			            <td>Từ điển (key - value)</td>
			        </tr>
			        <tr>
			            <td><span class="tag">None</span></td>
			            <td>Chỉ có một giá trị duy nhất</td>
			            <td>Giá trị rỗng</td>
			        </tr>
			    </tbody>
			</table>
            <h4>Ví dụ:</h4>
            <pre>
C++:
int a = 5;
string ten = "An";   // chuỗi
int tuoi = 16;       // số nguyên
double diem = 8.5;   // số thực
bool dat = true;     // đúng/sai

Python:
ten = "An"    # str (chuỗi)
tuoi = 16     # int (số nguyên)
diem = 8.5    # float (số thực)
dat = True    # bool (đúng/sai)
            </pre>
        `;
    }

    if(type === "dieukhien"){
        content.innerHTML = `
            <h2>Cấu trúc điều khiển</h2>
            <section class="control-structure">
    		<p>
		        <strong>Cấu trúc điều khiển (Control Structures)</strong> là các thành phần trong chương trình 
		        dùng để điều khiển thứ tự thực hiện các câu lệnh. 
		        Nhờ đó chương trình có thể rẽ nhánh, lặp lại hoặc kết thúc theo điều kiện.
		    </p>
    <hr>
    <h3>a. Cấu trúc tuần tự (Sequential Structure)</h3>
    <p>Các câu lệnh được thực hiện lần lượt từ trên xuống dưới.</p>

    <div class="code-box">
        <h4>Ví dụ C++</h4>
        <pre>
int a = 5;
int b = 3;
int c = a + b;
cout << c;
        </pre>

        <h4>Ví dụ Python</h4>
        <pre>
a = 5
b = 3
c = a + b
print(c)
        </pre>
    </div>

    <hr>

    <h3>b. Cấu trúc rẽ nhánh (Selection Structure)</h3>
    <p>
        Cho phép chương trình lựa chọn thực hiện một trong nhiều nhánh lệnh 
        dựa trên điều kiện đúng hoặc sai.
    </p>

    <h4>*. Câu lệnh if - else</h4>

    <div class="code-box">
        <h5>C++</h5>
        <pre>
if (a > 0) {
    cout << "So duong";
} else {
    cout << "So am";
}
        </pre>

        <h5>Python</h5>
        <pre>
if a > 0:
    print("So duong")
else:
    print("So am")
        </pre>
    </div>

    <h4>*. Câu lệnh switch (C++ only)</h4>

    <div class="code-box">
        <pre>
switch(a) {
    case 1:
        cout << "Mot";
        break;
    case 2:
        cout << "Hai";
        break;
    default:
        cout << "Khac";
}
        </pre>
    </div>

    <hr>

    <h3>c. Cấu trúc lặp (Loop Structure)</h3>
    <p>Cho phép thực hiện một khối lệnh nhiều lần khi điều kiện còn đúng.</p>

    <h4>*. Vòng lặp for</h4>

    <div class="code-box">
        <h5>C++</h5>
        <pre>
for(int i = 0; i < 5; i++) {
    cout << i;
}
        </pre>

        <h5>Python</h5>
        <pre>
for i in range(5):
    print(i)
        </pre>
    </div>

    <h4>*. Vòng lặp while</h4>

    <div class="code-box">
        <h5>C++</h5>
        <pre>
int i = 0;
while(i < 5) {
    cout << i;
    i++;
}
        </pre>

        <h5>Python</h5>
        <pre>
i = 0
while i < 5:
    print(i)
    i += 1
        </pre>
    </div>

    <h4>c. do - while (Chỉ có trong C++)</h4>

    <div class="code-box">
        <pre>
int i = 0;
do {
    cout << i;
    i++;
} while(i < 5);
        </pre>
    </div>

    <hr>

    <h3>d. Câu lệnh điều khiển phụ</h3>
    <ul>
        <li><strong>break:</strong> Thoát khỏi vòng lặp ngay lập tức.</li>
        <li><strong>continue:</strong> Bỏ qua lần lặp hiện tại.</li>
        <li><strong>return:</strong> Kết thúc hàm và trả về giá trị.</li>
    </ul>

    <hr>

    <h3>e. So sánh C++ và Python</h3>

    <table border="1" cellpadding="8" cellspacing="0">
        <tr>
            <th>Tiêu chí</th>
            <th>C++</th>
            <th>Python</th>
        </tr>
        <tr>
            <td>Cú pháp</td>
            <td>Dùng dấu { }</td>
            <td>Dựa vào thụt lề</td>
        </tr>
        <tr>
            <td>switch</td>
            <td>Có</td>
            <td>Không (trước 3.10)</td>
        </tr>
        <tr>
            <td>do-while</td>
            <td>Có</td>
            <td>Không</td>
        </tr>
        <tr>
            <td>Mức độ dễ đọc</td>
            <td>Trung bình</td>
            <td>Dễ hiểu, ngắn gọn</td>
        </tr>
    </table>

</section>
            <h4>Rẽ nhánh (if-else)</h4>
            <pre>
C++:
if(a > 0){
    cout << "Duong";
}

Python:
if a > 0:
    print("Duong")
            </pre>
        `;
    }

    if(type === "ham"){
        content.innerHTML = `
            <section class="function-section">
    			<h3>3.1. Hàn (Function)</h3>
			    <p>
			        <strong>Hàm (Function)</strong> là một khối lệnh được đặt tên,
			        thực hiện một nhiệm vụ cụ thể và có thể được gọi lại nhiều lần trong chương trình.
			        Hàm giúp chương trình rõ ràng, dễ quản lý và tránh lặp lại mã lệnh.
			    </p>			    
    			<hr>
    			<h3>3.2. Hàm trong C++</h3>
    				<h4>3.2.1. Cấu trúc tổng quát</h4>
	<div class="code-box">
<pre>
kieu_tra_ve ten_ham(danh_sach_tham_so){
    // thân hàm
    return gia_tri;
}
</pre>
    </div>
    				<h4>3.2.2. Ví dụ: Hàm tính tổng</h4>

    <div class="code-box">
        <h5>C++</h5>
<pre>
#include &lt;iostream&gt;
using namespace std;

int tong(int a, int b){
    return a + b;
}

int main(){
    int kq = tong(3, 5);
    cout &lt;&lt; "Tong = " &lt;&lt; kq;
    return 0;
}
</pre>
    </div>

    				<h4>3.2.3. Hàm không trả về giá trị (void)</h4>

    <div class="code-box">
<pre>
void xinChao(){
    cout &lt;&lt; "Xin chao hoc sinh!";
}
</pre>
    </div>
    <hr>
    			<h3>3.3. Hàm trong Python</h3>
    				<h4>3.3.1. Cấu trúc tổng quát</h4>

    <div class="code-box">
<pre>
def ten_ham(tham_so):
    # thân hàm
    return gia_tri
</pre>
    </div>

    				<h4>3.3.2. Ví dụ tương đương C++</h4>

    <div class="code-box">
        <h5>Python</h5>
<pre>
def tong(a, b):
    return a + b

kq = tong(3, 5)
print("Tong =", kq)
</pre>
    </div>

    				<h4>3.3.3. Hàm không trả về giá trị</h4>

    <div class="code-box">
<pre>
def xin_chao():
    print("Xin chao hoc sinh!")
</pre>
    </div>

    <hr>

    			<h3>3.4. Hàm đệ quy (Recursion)</h3>

    <h4>C++ – Tính giai thừa</h4>

    <div class="code-box">
<pre>
int giaithua(int n){
    if(n == 0) return 1;
    return n * giaithua(n - 1);
}
</pre>
    </div>

    <h4>Python – Tính giai thừa</h4>

    <div class="code-box">
<pre>
def giaithua(n):
    if n == 0:
        return 1
    return n * giaithua(n - 1)
</pre>
    </div>

    <hr>

    			<h3>3.5. So sánh C++ và Python</h3>

    <table class="compare-table">
        <tr>
            <th>Tiêu chí</th>
            <th>C++</th>
            <th>Python</th>
        </tr>
        <tr>
            <td>Khai báo kiểu dữ liệu</td>
            <td>Bắt buộc</td>
            <td>Không cần</td>
        </tr>
        <tr>
            <td>Từ khóa khai báo</td>
            <td>Không có từ khóa riêng</td>
            <td>def</td>
        </tr>
        <tr>
            <td>Cấu trúc khối lệnh</td>
            <td>Dùng { }</td>
            <td>Dựa vào thụt lề</td>
        </tr>
        <tr>
            <td>Độ ngắn gọn</td>
            <td>Dài hơn</td>
            <td>Ngắn gọn, dễ đọc</td>
        </tr>
    </table>

</section>

            <pre>
C++:
int tong(int a, int b){
    return a + b;
}

Python:
def tong(a, b):
    return a + b
            </pre>
        `;
    }

if(type === "mang"){
        content.innerHTML = `
        <section class="array-section">

    <h3>4.1. Mảng (Array)</h3>

    <p>
        <strong>Mảng (Array)</strong> là cấu trúc dữ liệu dùng để lưu trữ nhiều giá trị 
        cùng kiểu dữ liệu trong một biến duy nhất. Các phần tử được lưu trữ liên tiếp 
        trong bộ nhớ và truy cập thông qua chỉ số (index).
    </p>

    <ul>
        <li>Chỉ số bắt đầu từ 0</li>
        <li>Các phần tử có cùng kiểu dữ liệu (trong C++)</li>
        <li>Kích thước thường được xác định trước</li>
    </ul>

    <hr>

    <h3>4.2. Mảng trong C++</h3>

    <h4>4.2.1. Cú pháp khai báo</h4>

    <div class="code-box">
<pre>
kieu_du_lieu ten_mang[kich_thuoc];

Ví dụ:
int a[5];
</pre>
    </div>

    <h4>4.2.2. Khởi tạo mảng</h4>

    <div class="code-box">
<pre>
int a[5] = {1, 2, 3, 4, 5};
</pre>
    </div>

    <h4>4.2.3. Truy cập phần tử</h4>

    <div class="code-box">
<pre>
cout << a[0];  // In phần tử đầu tiên
</pre>
    </div>

    <h4>4.2.4. Ví dụ hoàn chỉnh</h4>

    <div class="code-box">
<pre>
#include &lt;iostream&gt;
using namespace std;

int main(){
    int a[5] = {10, 20, 30, 40, 50};

    for(int i = 0; i < 5; i++){
        cout << a[i] << " ";
    }

    return 0;
}
</pre>
    </div>

    <p><strong>Hạn chế:</strong> Kích thước cố định, không tự thay đổi độ dài.</p>

    <hr>

    <h3>4.3. Mảng trong Python (List)</h3>

    <p>
        Python không dùng mảng tĩnh như C++, mà sử dụng <strong>List</strong> 
        để thay thế với tính linh hoạt cao hơn.
    </p>

    <h4>4.3.1. Khai báo List</h4>

    <div class="code-box">
<pre>
a = [1, 2, 3, 4, 5]
</pre>
    </div>

    <h4>4.3.2. Truy cập phần tử</h4>

    <div class="code-box">
<pre>
print(a[0])
</pre>
    </div>

    <h4>4.3.3. Duyệt mảng</h4>

    <div class="code-box">
<pre>
for x in a:
    print(x)
</pre>
    </div>

    <h4>4.3.4. Thêm phần tử</h4>

    <div class="code-box">
<pre>
a.append(6)
</pre>
    </div>

    <p><strong>Ưu điểm:</strong> Kích thước linh hoạt, có nhiều hàm hỗ trợ.</p>

    <hr>

    <h3>4.4. Mảng hai chiều (Ma trận)</h3>

    <h4>C++</h4>

    <div class="code-box">
<pre>
int a[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

cout << a[1][2];
</pre>
    </div>

    <h4>Python</h4>

    <div class="code-box">
<pre>
a = [
    [1, 2, 3],
    [4, 5, 6]
]

print(a[1][2])
</pre>
    </div>

    <hr>

    <h3>4.5. So sánh C++ và Python</h3>

    <table class="compare-table">
        <tr>
            <th>Tiêu chí</th>
            <th>C++</th>
            <th>Python</th>
        </tr>
        <tr>
            <td>Kiểu dữ liệu</td>
            <td>Phải cùng kiểu</td>
            <td>Có thể khác kiểu</td>
        </tr>
        <tr>
            <td>Kích thước</td>
            <td>Cố định</td>
            <td>Linh hoạt</td>
        </tr>
        <tr>
            <td>Cú pháp</td>
            <td>Phải khai báo kiểu</td>
            <td>Không cần khai báo kiểu</td>
        </tr>
        <tr>
            <td>Tính linh hoạt</td>
            <td>Thấp hơn</td>
            <td>Cao hơn</td>
        </tr>
    </table>

</section>
 `;
}

if(type === "nxdl"){
        content.innerHTML = `
        <section class="io-section">

    <h3>5.1. NHẬP – XUẤT DỮ LIỆU (INPUT / OUTPUT)</h3>

    <p>
        <strong>Nhập – Xuất dữ liệu (Input/Output)</strong> là quá trình trao đổi thông tin
        giữa chương trình và người dùng.
    </p>

    <ul>
        <li><strong>Input:</strong> Đưa dữ liệu vào chương trình (bàn phím, file...)</li>
        <li><strong>Output:</strong> Hiển thị dữ liệu ra màn hình hoặc thiết bị khác</li>
    </ul>

    <hr>

    <h3>5.2. Nhập – Xuất trong C++</h3>

    <h4>5.2.1. Xuất dữ liệu – cout</h4>

    <div class="code-box">
<pre>
#include &lt;iostream&gt;
using namespace std;

cout &lt;&lt; "Xin chao!";
</pre>
    </div>

    <h4>5.2.2. Nhập dữ liệu – cin</h4>

    <div class="code-box">
<pre>
int a;
cout &lt;&lt; "Nhap a: ";
cin &gt;&gt; a;
</pre>
    </div>

    <h4>5.2.3. Ví dụ hoàn chỉnh</h4>

    <div class="code-box">
<pre>
#include &lt;iostream&gt;
using namespace std;

int main(){
    int a, b;
    cout &lt;&lt; "Nhap hai so: ";
    cin &gt;&gt; a &gt;&gt; b;

    cout &lt;&lt; "Tong = " &lt;&lt; a + b;

    return 0;
}
</pre>
    </div>

    <h4>4. Nhập chuỗi</h4>

    <div class="code-box">
<pre>
string s;
getline(cin, s);
</pre>
    </div>

    <hr>

    <h3>5.3. Nhập – Xuất trong Python</h3>

    <h4>5.3.1. Xuất dữ liệu – print()</h4>

    <div class="code-box">
<pre>
print("Xin chao!")
</pre>
    </div>

    <h4>5.3.2. Nhập dữ liệu – input()</h4>

    <div class="code-box">
<pre>
a = input("Nhap a: ")
</pre>
    </div>

    <p><strong>Lưu ý:</strong> input() luôn trả về chuỗi.</p>

    <h4>5.3.3. Chuyển kiểu dữ liệu</h4>

    <div class="code-box">
<pre>
a = int(input("Nhap a: "))
b = float(input("Nhap b: "))
</pre>
    </div>

    <h4>5.3.4. Ví dụ hoàn chỉnh</h4>

    <div class="code-box">
<pre>
a = int(input("Nhap a: "))
b = int(input("Nhap b: "))

print("Tong =", a + b)
</pre>
    </div>

    <hr>

    <h3>5.4. So sánh C++ và Python</h3>

    <table class="compare-table">
        <tr>
            <th>Tiêu chí</th>
            <th>C++</th>
            <th>Python</th>
        </tr>
        <tr>
            <td>Nhập dữ liệu</td>
            <td>cin</td>
            <td>input()</td>
        </tr>
        <tr>
            <td>Xuất dữ liệu</td>
            <td>cout</td>
            <td>print()</td>
        </tr>
        <tr>
            <td>Chuyển kiểu</td>
            <td>Tự động theo khai báo</td>
            <td>Phải dùng int(), float()</td>
        </tr>
        <tr>
            <td>Độ ngắn gọn</td>
            <td>Dài hơn</td>
            <td>Ngắn gọn</td>
        </tr>
    </table>

</section>

     `;
	}
if(type === "tncb"){
        content.innerHTML = `
        <section class="basic-terms">

    <h3>6.1. Biến (Variable)</h3>
    <p>
        Biến là vùng nhớ dùng để lưu trữ dữ liệu. Giá trị của biến có thể thay đổi 
        trong quá trình chương trình thực thi.
    </p>

    <div class="code-box">
        <h4>C++</h4>
<pre>
int a = 5;
</pre>

        <h4>Python</h4>
<pre>
a = 5
</pre>
    </div>

    <hr>

    <h3>6.2. Kiểu dữ liệu (Data Type)</h3>

    <table class="compare-table">
        <tr>
            <th>Kiểu</th>
            <th>C++</th>
            <th>Python</th>
            <th>Ý nghĩa</th>
        </tr>
        <tr>
            <td>Số nguyên</td>
            <td>int</td>
            <td>int</td>
            <td>Số không có phần thập phân</td>
        </tr>
        <tr>
            <td>Số thực</td>
            <td>float, double</td>
            <td>float</td>
            <td>Số có phần thập phân</td>
        </tr>
        <tr>
            <td>Chuỗi</td>
            <td>string</td>
            <td>str</td>
            <td>Dãy ký tự</td>
        </tr>
        <tr>
            <td>Logic</td>
            <td>bool</td>
            <td>bool</td>
            <td>True / False</td>
        </tr>
    </table>

    <hr>

    <h3>6.3. Hằng (Constant)</h3>

    <div class="code-box">
        <h4>C++</h4>
<pre>
const float PI = 3.14;
</pre>

        <h4>Python</h4>
<pre>
PI = 3.14   # Theo quy ước viết hoa
</pre>
    </div>

    <hr>

    <h3>6.4. Toán tử (Operator)</h3>

    <ul>
        <li><strong>+</strong> : Cộng</li>
        <li><strong>-</strong> : Trừ</li>
        <li><strong>*</strong> : Nhân</li>
        <li><strong>/</strong> : Chia</li>
        <li><strong>%</strong> : Chia lấy dư</li>
    </ul>

    <div class="code-box">
<pre>
int x = 5 + 3;      // C++
x = 5 + 3           # Python
</pre>
    </div>

    <hr>

    <h3>6.5. Biểu thức (Expression)</h3>
    <p>
        Biểu thức là sự kết hợp của biến, hằng và toán tử để tạo ra một giá trị.
    </p>

    <div class="code-box">
<pre>
int x = a + b * 2;   // C++
x = a + b * 2        # Python
</pre>
    </div>

    <hr>

    <h3>6.6. Câu lệnh (Statement)</h3>

    <div class="code-box">
        <h4>C++</h4>
<pre>
cout << "Hello";
</pre>

        <h4>Python</h4>
<pre>
print("Hello")
</pre>
    </div>

    <hr>

    <h3>6.7. Từ khóa (Keyword)</h3>

    <p><strong>C++:</strong> int, float, if, else, for, while, return</p>
    <p><strong>Python:</strong> def, if, else, for, while, True, False</p>

    <hr>

    <h3>6.8. Tham số (Parameter)</h3>

    <div class="code-box">
        <h4>C++</h4>
<pre>
int tong(int a, int b){
    return a + b;
}
</pre>

        <h4>Python</h4>
<pre>
def tong(a, b):
    return a + b
</pre>
    </div>

    <hr>

    <h3>6.9. Đệ quy (Recursion)</h3>

    <div class="code-box">
        <h4>C++</h4>
<pre>
int fact(int n){
    if(n == 0) return 1;
    return n * fact(n - 1);
}
</pre>

        <h4>Python</h4>
<pre>
def fact(n):
    if n == 0:
        return 1
    return n * fact(n - 1)
</pre>
    </div>

    <hr>

    <h3>6.10. Thư viện (Library)</h3>

    <div class="code-box">
        <h4>C++</h4>
<pre>
#include &lt;iostream&gt;
</pre>

        <h4>Python</h4>
<pre>
import math
</pre>
    </div>

</section>
      `;
	}   
}



document.addEventListener("DOMContentLoaded", function(){
    showContent("bien");
});
documnet.addEventListener("scroll",function(){
	const reveals=document.querySelectorAll(".reveal");
	reveals.forEach(function(card){
		const windowHeight=window.innerHeight;
		const elemenTop=card.getBoundingClientRect().top;
		if(elementTop<windowHeight-100){
			card.classList.add("active");
		}
	});
});
document.getElementById("countThuatngu").textContent=document.querySelectorAll("#thuatngu.card").length;
document.getElementById("countCautruc").textContent=document.querySelectorAll("#cautruc.card").length;
document.getElementById("countThuatoan").textContent=document.querySelectorAll("#thuattoan.card").length;







