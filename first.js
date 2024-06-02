/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Create a variable to hold the number of NFTs
const NFTs = []
// Create an object inside the mintNFT function to hold the metadata for your NFTs
function mintNFT(username, balcolor, aankhcolor, kameeztype) {
  const NFT = {
    "name": username,
    "hairColor": balcolor,
    "eyeColor": aankhcolor,
    "shirtType": kameeztype
    }
    NFTs.push(NFT);
    console.log("Minted: " + username);
}
// Loop through the array of NFTs and print their metadata to the console
function listNFTs () {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\nName: " + NFTs[i].name);
    console.log("HairColor: " + NFTs[i].hairColor);
    console.log("EyeColor: " + NFTs[i].eyeColor);
    console.log("ShirtType: " + NFTs[i].shirtType);
  }
}
// Return the total number of NFTs minted
function getTotalSupply() {
  console.log("\n" + NFTs.length);
}

// Call your functions below this line
// Mint some NFTs
mintNFT("Kshitij", "black", "green", "Hoodie");
mintNFT("Dhruv", "white", "grey", "Zipper");
mintNFT("Anju", "blond", "red", "Zipper");
listNFTs();
getTotalSupply();