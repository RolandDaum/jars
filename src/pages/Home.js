import charachter from './assets/character.png'
import mouse from './assets/mouse.png'

import WhyCard from './components/WhyCard';
import PriceCard from './components/PriceCard';
import QnA from './components/qna';
import RatingCard from './components/rating';

export default function Home() {
    return (
        <div class="w-screen m-0 p-0 bg-background h-full flex flex-col items-center select-none">
            <section class="bg-background flex flex-row justify-between items-start py-10 px-10 max-w-screen-xl w-full h-full">
                <div class="mr-10 flex flex-col max-w-xl">
                    <h1 class="font-impact text-text text-5xl bg-primary-default p-10 rounded ">Kompaktes Design<br></br>aus dem Glas</h1>
                    <p class="font-bodonimt text-text m-10 text-3xl">Wir gestallten eine visuelle Identität, die so klar und brilliant ist wie das Beste, was aus einem Glas kommt. Bringen Sie Ihr Geschäft auf das nächste Level des Designs</p>
                    <div class="flex flex-row">
                        <button class="font-bodonimt text-text text-3xl rounded bg-primary-default hover:bg-primary-600 px-5 py-3 mx-10 w-48 active:translate-y-1">
                            Hire Now
                        </button>
                        <button class="font-bodonimt text-text text-3xl rounded bg-secondary-default hover:bg-secondary-600 px-5 py-3 w-48 active:translate-y-1">
                            Meet us
                        </button>
                    </div>
                    <div class="flex flex-row justify-center items-center m-10 self-start">
                        <img src={mouse} class="h-7"></img>
                        <p class="font-bodonimt text-text ml-5 text-lg">Scroll to see more of us</p>
                    </div>
                </div>
                <div>
                    <img src={charachter} class=" w-min h-184 bg-primary-default p-10 rounded box-border"></img>
                </div>
            </section>
            <section class="bg-background flex flex-col justify-center items-center py-10 px-10 max-w-screen-xl w-full h-fit">
                <h1 class="text-text font-impact text-6xl">Warum Jars?</h1>
                <div class="flex items-stretch my-10">
                    <WhyCard textIndex={0}></WhyCard>
                    <WhyCard textIndex={1}></WhyCard>
                    <WhyCard textIndex={2}></WhyCard>
                </div>
            </section>
            <section class="bg-background flex flex-col justify-center items-center py-10 px-10 max-w-screen-xl w-full h-fit">
                <div class="flex flex-col justify-center items-center">
                    <h1 class="text-text font-impact text-6xl">Pricing</h1>
                    <h2 class="text-text font-bodonimt text-xl">Schauen sie sich unsere Preispläne an!</h2>
                </div>
                <div class="flex items-stretch my-10">
                    <PriceCard levelIndex={0}></PriceCard>
                    <PriceCard levelIndex={1}></PriceCard>
                    <PriceCard levelIndex={2}></PriceCard>
                </div>
            </section>
            <section class="bg-background flex flex-col justify-center items-center py-10 px-10 max-w-screen-xl w-full h-fit">
                <h1 class="text-text font-impact text-6xl">Fragen und Antworten</h1>
                <div class="flex flex-col justify-centers items-stretch my-10 w-full">
                    <QnA qnaIndex={0}></QnA>
                    <QnA qnaIndex={1}></QnA>
                    <QnA qnaIndex={2}></QnA>
                    <QnA qnaIndex={3}></QnA>
                </div>
            </section>
            <section class="bg-background flex flex-col justify-center items-center py-10 px-10 max-w-screen-xl w-full h-fit">
                <div class="flex flex-col justify-center items-center">
                    <h1 class="text-text font-impact text-6xl">Bewertungen</h1>
                    <h2 class="text-text font-bodonimt text-xl">Was unsere realen Kunden von uns denken.</h2>
                </div>
                <div class="flex flex-row items-stretch my-10 w-full">
                    <RatingCard Userindex={0}></RatingCard>
                    <RatingCard Userindex={1}></RatingCard>
                    <RatingCard Userindex={2}></RatingCard>
                </div>
            </section>
        </div>
    )
}