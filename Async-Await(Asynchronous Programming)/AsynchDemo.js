
function delay()
{
    //console.log("This is the first message");
    //setTimeout(()=>{ console.log("This is the second message");},2000);

   /* return new Promise(reslove=> setTimeout(()=>{ 
        console.log("This is the second message");
        reslove();
    },2000));*/

    return new Promise(resolve=>setTimeout(resolve,2000));
}
async function test()
{
    console.log("Before delay");
    await delay();
    console.log("After delay");
}
test();
