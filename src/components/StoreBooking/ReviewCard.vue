<template>
    <div class="review-wrapper d-flex flex-column gap-2">
        <div class="d-flex gap-2">
            <div class="circle">
            </div>
            <div class="d-flex align-items-center accent-title">
                Max{{review.item}}
            </div>
        </div>
        <div class="d-flex align-items-center gap-2">
            <div>⭐️⭐️⭐️⭐️⭐️</div>
            <div class="grayColor grade-font">幾月幾日</div>
        </div>
        <article class="grayColor">
            我們不得不面對一個非常尷尬的事實，那就是，在這種不可避免的衝突下，我們必須解決這個問題。桌遊的發生，到底需要如何實現，不桌遊的發生，又會如何產生。
        </article>
        <hr>
        <div class="d-flex align-items-center gap-2">
            <div class="accent-title">
                業主回應
            </div>
            <div class="grayColor grade-font">
                幾月幾日
            </div>
        </div>
        <article class="grayColor">
            伊壁鳩魯講過一句值得人反覆尋思的話，友誼使歡樂倍對我們幫助最大的，並不是朋友們的實際幫助，而是我們堅信得到他們的幫助的信念。這段話令我陷入了沈思。
        </article>

    </div>
</template>
<script>


export default{
    setup() {
        
    },
    data(){
        return{

        }
    },
    props:{
        'review': Object,
    }
}

</script>

<style scoped>
    .review-wrapper{
        position: relative;
        left: -900px;
        min-width: 350px;
        margin-right:100px;
        box-shadow: 0px 0px 20px 4px rgb(210, 210, 210);
        padding: 30px;
    }
    .review-wrapper:first-child,
    .review-wrapper:last-child
    {
       opacity: 0;
    }
    .circle{
        width: 80px;
        height: 80px;
        border-radius: 99%;
        background-color: #ccc;
    }
    .accent-title{
        font-weight: 600;
    }
    .grade-font{
        font-size: 18px;
    }
</style>