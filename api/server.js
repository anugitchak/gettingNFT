const express =require('express');
const {Web3} = require("web3");
const ABI =require("./ABI.json");
const socketIO= require('socket.io');
const cors=require('cors')
const app =express()
app.use(cors())
app.use(express.json())
const web3 =new Web3("https://polished-delicate-gadget.ethereum-sepolia.discover.quiknode.pro/17fbcf5484bbf0a9c02201ad659338698b2bbb01/")
const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138"

const contract = new web3.eth.Contract(ABI,contractAddress);

const fetchNFTs =async(account)=>{
    try{
        const nftBalance =await contract.methods.balanceOf(account).call()
        return{userNFTs:Number(nftBalance)}
    }catch(error){
        console.error("Error in fetching NFT:",error)
    }
}
app.post ('/members',async(req,res)=>{
    try{
        const account =req.body.from;
        const numNFTs= await fetchNFTs (account);
        if(numNFTs.userNFTs>0){
            res.status(200).json({status:200,numNFTs})
        }else{
            res.status(400).json({status:400,message:"You have 0 NFT"})
        }
    }catch(error){
        res.status(500).json({error:'Internal Server Error'})
    }
})

app.post('/webhook',async(req,res)=>{
    try{
      const account = req.body[0].from;
      const numNFTs = await fetchNFTs(account);
      io.emit('nftsUpdated',{userNFTs:numNFTs.userNFTs})
      res.status(200).json({status:200,message:"Webhook Triggered"})
    }catch(error){
      console.error(error)
    }
})


const PORT =3000;
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})
const io= socketIO(server);
io.on('connection',()=>{
    console.log("Connected");
})