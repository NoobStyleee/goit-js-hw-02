makeTransaction(quantity, pricePerDroid, customerCredits)
let sum = quantity + pricePerDroid;
if (customerCredits < sum)
    return "Insufficient funds!";
else
    return ("You ordered ${quantity} droids worth %{sum} credits!");