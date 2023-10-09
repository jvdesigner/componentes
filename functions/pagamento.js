

// =================================== FUNCOES =============================================== //

//<script src="https://sdk.mercadopago.com/js/v2"></script>
//document.getElementById('imgPix').src = 'data:image/jpeg;base64,'+vbase64

function criarPagamento(){

fetch('https://api.mercadopago.com/v1/payments', {

  method: 'POST',

  headers: {
    'Authorization': 'Bearer APP_USR-6781688030380061-100709-f2faf782b96a6db5775505e795e121fe-501341309',
    'Content-Type': 'application/json',
  },

  body: JSON.stringify({
    
    "description": "Payment for product",
    "external_reference": "MP0001",
    "installments": 1,
    "metadata": {},
    "payer": {
      "entity_type": "individual",
      "type": "customer",
      "email": "test_user_123@testuser.com",
      "identification": {
        "type": "CPF",
        "number": "95749019047"
      }
    },
    "payment_method_id": "pix",
    "token": "970bb42c-d23b-4c6c-82cd-ead090b9a53d",
    "transaction_amount": 0.01
  }),
  
})
  .then(response => response.json())
  .then(data => {
    // Handle the response data as needed
  })
  .catch(error => console.error('Error creating payment: ', error));


}









// =================================== EXECUTAR =============================================== //





