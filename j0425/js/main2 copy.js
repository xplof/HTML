//jquery
$(function(){
   $("#dataOpen3").click(function(){
      alert("확인");
      $.ajax({
         url:"https://jsonplaceholder.typicode.com/users",
         type:"get",
         data:{"test":"1"},
         dataType:"json",
         success:function(data){
            alert("성공")
            let hdata=""
            for(let i=0;i<data.length;i++){
               hdata+=`<tr id="">`;
               hdata+=`<td>${data[i].id}</td>`;
               hdata+=`<td>${data[i].name}</td>`;
               hdata+=`<td>${data[i].username}</td>`;
               hdata+=`<td>${data[i].email}</td>`;
               hdata+=`<td>${data[i].address["city"]}</td>`;
               hdata+=`<td>${data[i].address["zipcode"]}</td>`;
               hdata+=`<td>${data[i].phone}</td>`;
               hdata+=`<td>${data[i].company["name"]}</td>`;
               hdata+=`<td>
               <button type="button" class="updateBtn">수정</button>
               <button type="button" class="deleteBtn">삭제</button>
            </td>`;
               hdata+=`</tr>`;
            }
            $("#tbody").html(hdata)
            

         

         },
         error:function(){
            alert("실패")
         }
      })
   })//데이터불러오기버튼
})//jquery