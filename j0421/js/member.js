
function pwConfirm(){
    console.log(document.querySelector("#pw").value);
    console.log(document.querySelector("#pw2").value);
    let pw =document.querySelector("#pw").value;
    let pw2= document.querySelector("#pw2").value;
    
    if(pw == pw2){document.querySelector("#pwCheck").style.color="slateblue";
    document.querySelector("#pwCheck").innerText="비밀번호가 일치합니다";

    }else{document.querySelector("#pwCheck").style.color="crimson";
    document.querySelector("#pwCheck").innerText="비밀번호가 일치하지 않습니다";

    }
    if(pw2==""){document.querySelector("#pwCheck").style.color="#555";
    document.querySelector("#pwCheck").innerText="비밀번호를 다시 한번 입력해주세요";
    }
    
}
    //다음주소함수
    function zipCodeBtn(){
        // alert("다음주소 api호출");
        //다음주소 api 호출
        new daum.Postcode({
            oncomplete: function(data) {
                document.querySelector("#postZip").value=data.zonecode;
                document.querySelector("#addr1").value=data.address;
                document.querySelector("#addr2").focus();
    
            }
        }).open();
    
    }
