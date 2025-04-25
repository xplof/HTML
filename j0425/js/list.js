$(function(){
   $("#ubtn").click(function(){
      alert("클릭")
      $.ajax({
         url:"../js/board.json",
         type:"get",
         dataType:"json",
         data:{"bno":1,"bhit":50},
         
         success:function(data){
            let hdata=""
            for(let i=0;i<data.length;i++){
               hdata+=`<tr>`;
               hdata+=`<td>${data[i].bno}</td>`;
               hdata+=`<td class="table-title">${data[i].title}</td>`;
               hdata+=`<td>${data[i].bdate}</td>`;
               hdata+=`</tr>`;
            }
            $("#tbody").html(hdata);
         }//성공시
         ,error:function(){
            alert("실패")
         }
         
      
      })//ajax
   })//데이터불러오기

   })//query