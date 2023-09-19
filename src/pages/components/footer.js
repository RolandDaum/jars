import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import charachter from '../assets/character.png'

export default function Footer() {
    return(
        <div class="w-screen bg-background pb-10 select-none">
            <div class="max-w-screen-xl mx-auto bg-text text-background font-bodonimt rounded rounded-t-xl">
                <div class="bg-primary-default flex flex-row justify-start items-center p-5 px-16 rounded-t">
                    <img src={logo} class="h-16"></img>
                    <h1 class="font-impact text-3xl ml-5">Corporate Design</h1>
                </div>
                <div class="flex flex-row justify-evenly items-start p-5 px-16 ">
                    <div class="flex flex-col justify-center items-start w-72">
                        <h2 class="mb-5 text-xl">Kompaktes Design aus dem Glas.</h2>
                        <div class="bg-primary-default rounded p-3 px-16 w-full">
                            <img src={charachter} class=""></img>
                        </div>
                    </div>
                    <div>
                        <NavLink to="/">
                            <p class=" font-impact text-3xl">Website</p>
                        </NavLink>
                        <NavLink to="/">
                            <p class="py-3 text-xl hover:underline">Projekte</p>
                        </NavLink>
                        <NavLink to="/">
                            <p class="py-3 text-xl hover:underline">News</p>
                        </NavLink>
                        <NavLink to="/">
                            <p class="py-3 text-xl hover:underline">Team</p>
                        </NavLink>
                    </div>
                    <div class="flex flex-col justify-center items-start">
                        <h1 class="font-impact text-3xl">Social Media</h1>
                        <a class="py-3 text-xl hover:underline hover:cursor-pointer">Twitter</a>
                        <a class="py-3 text-xl hover:underline hover:cursor-pointer">Pinterest</a>
                        <a class="py-3 text-xl hover:underline hover:cursor-pointer">YouTube</a>
                        <a class="py-3 text-xl hover:underline hover:cursor-pointer">Instagram</a>
                        <a class="py-3 text-xl hover:underline hover:cursor-pointer">TikTok</a>
                    </div>
                </div>
                <div class=" m-5 mx-16 px-10 py-5 border-t-2 border-t-background">
                    <p>Rückmeldung? Vorschläge? Sachen die du sehen willst? Kontaktiere uns nicht!</p>
                    <p>Gemacht von Jar$ Corporate Design Inc. GmbG.</p>
                    <p>Copyright © 2023 Alle Rechte vorbehalten. Dieses Projekt unterliegt der CC BY-NC-ND (Creative Commons Namensnennung-NichtKommerziell-KeineBearbeitungen) Lizenz. Modifikationen, Weiterverteilungen oder Klone dieses Projekts sind NICHT gestattet und stehen nicht in Verbindung mit Jars - Corporate Design inc. GmbH.</p>
                </div>
            </div>
        </div>
    )
}