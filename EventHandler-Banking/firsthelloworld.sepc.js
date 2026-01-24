//Simple unit test
//Identify business problem
//The syatem should calculate the total price including GSt

//Rule : GSt is 18% of total price
//Test case:
//Input: price=1000
//Expected output: total price = 1180

//Test case:
//Acceptance criteria
//Given the price is 1000
//when the GST is calculated
//Then the total price should be 1180

//Test function

describe('GSt Calculation', function() {

    it('should calculate total price including GSt', function(){
    
        //Arrange 
        var price = 1000;
        var expectedTotalPrice = 1180;

        //Act
        var actualPrice = calculateTotalPrice(price);

        //Assert
        if(actualPrice != expectedTotalPrice)
        {
            throw new Error('Expected' + expectedTotalPrice + 'but got'+ actualPrice);
        }
    });
});