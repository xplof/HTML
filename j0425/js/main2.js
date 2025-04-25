$(function(){
   $("#dataOpen3").click(function(){
      alert("확인");

      $.ajax({
         url: "https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?serviceKey=EnrDXjpP7Mo6Oietes78oe7jS7AN9Z5wXp0Y13CoPj4XAHQf4YPBZYeF9r%2Fi4tBHo0BzeGAdFllRVJ%2BtbqIYWA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&_type=json",
         type: "get",
         dataType: "json",
         success: function(data){
            alert("성공");

            let items = data.response.body.items.item;
            let hdata = "";

            for(let i = 0; i < items.length; i++){
               hdata += `<tr>`;
               hdata += `<td>${items[i].galContentId}</td>`;
               hdata += `<td>${items[i].galCreatedtime}</td>`;
               hdata += `<td>${items[i].galPhotographer}</td>`;
               hdata += `<td>${items[i].galPhotographyLocation}</td>`;
               hdata += `<td>${items[i].galSearchKeyword}</td>`;
               hdata += `<td>${items[i].galTitle}</td>`;
               hdata += `<td><img src="${items[i].galWebImageUrl}" width="100"></td>`;
               hdata += `<td></td>`;
               hdata += `</tr>`;
            }

            $("#tbody").html(hdata);
         },
         error: function(){
            alert("실패");
         }
      });
   });
});