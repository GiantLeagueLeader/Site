function registration()
{

    var data= document.getElementById("t1").value;
    var tecnico= document.getElementById("t2").value;
    var cpf= document.getElementById("t3").value;
    var setor= document.getElementById("t4").value;			
    var descricao= document.getElementById("t5").value;
   
    {				                            
           alert('Chamado Cadastrado');
           // Redirecting to other page or webste code. 
           window.location = "../index.html"; 
    }
}

function clearFunc()
{
    document.getElementById("t1").value="";
    document.getElementById("t2").value="";
    document.getElementById("t3").value="";
    document.getElementById("t4").value="";
    document.getElementById("t5").value="";
}