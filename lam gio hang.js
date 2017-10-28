//khoi tao bien count de giu tong mat hang
function init()
{
    if(localStorage.getItem("count")==null || localStorage.getItem("count")=="undefined")
    localStorage.setItem("count",0);
}
// them 1 san pham vao kho
function tim(ma)
{
    var c=localStorage.getItem("count");
    for (var i=1;i<=c;i++)
        {
            var v=localStorage.getItem(i);
            if(v!=null && v!="undefined")
                {
                    if (v.match("^"+ma+",")!=null)
                        return i;
                }
        }
    return -1;
}
function add(ma,ten,hinh,gia)
{
    var i=tim(ma); // tim ma sp xem co trong kho hay khong
    if(i==-1) //vao kho
        {
            var c=localStorage.getItem("count"); 
            c++;
            localStorage.setItem("count",c);
            localStorage.setItem(c,ma+","+ten+","+hinh+","+gia+",1");
            alert("Đã thêm vào kho!");
        }
    else //canh bao
        {
            alert("Bạn đã thêm vào kho mục hàng này rồi!");
        }
}
function view()
{
    var s="<table><caption>Giỏ hàng </caption>";
    s=s+"<tr>";
    s=s+"<th>MãSP</th>";
    s=s+"<th>TênSP</th>";
    s=s+"<th>Hình</th>";
    s=s+"<th>Giá</th>";
    s=s+"<th>S.Lượng</th>";
    s=s+"<th>Xóa</th>";
    s=s+"</r>";
    
    var sum=0;
    var c=localStorage.getItem("count");
    for(var i=1;i<=c;i++)
        {
            
            var v=localStorage.getItem(i);
            if(v!=null && v!="undefined")
                {  
                    s=s+"<tr>"
                    var arr=v.split(",");
                    s=s+"<td>" +arr[0] +"</td>";//masp
                    s=s+"<td>" +arr[1] +"</td>";//tensp
                    s=s+"<td><img src='" +arr[2] +"'></td>";//hinh
                    s=s+"<td>" +arr[3] +"</td>";//gia
                    s=s+"<td><input type='number' value='" +arr[4] +"'min='1' max='10' onchange='sua("+arr[0]+",this)' ></td>";
                    s=s+"<td><input type='button' value='Xóa' onclick='xoa(\""+arr[0]+"\")'></td>";
                    s=s+"</tr>";
                    sum=sum+arr[3]*arr[4];
                }
        }
    s=s+"</table>";
    s=s+"<p>Tổng Số tiền cần thanh toán   " +sum+ " VND</p>";
    
    document.getElementById("bang").innerHTML=s;
    document.getElementById("giohang").style.display="block";
}
function sua(ma,obj)
{
    var i=tim(ma);
    if(i!=-1)
        {
            var v=localStorage.getItem(i);
            if(v!=null && v!="undefined")
                {
                     var arr= v.split(",");
                     arr[4]=obj.value;
                     localStorage.setItem(i,arr[0]+"," +arr[1]+"," +arr[2]+"," +arr[3]+"," +arr[4]);
                     view();
                }
            
        }
}
function xoa(ma)
{
    var xacnhan=confirm("Bạn có chắc không ?");
    if (xacnhan==true)
        {
            var i=tim(ma);
            if(i!=-1)
                {
                    localStorage.removeItem(i);
                    view();
                }
        }
     
}
function hoanthanh()
{
    //check form ko trong
    // luu database -> mot moi hoc
    // huy gio hang cua client
    alert("Đơn đặt hàng của bạn đang được xử lý");
    var c=localStorage.getItem("count");
    for(var i=1;i<=c;i++)
        {
            localStorage.removeItem("count");
        }
    localStorage.removeItem("count");
    // window.open("index.html);
    location.href="index.html";
}