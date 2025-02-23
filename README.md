# Moa Sjögren, FJS24

### Allmänt om ramverket React: Hur/Varför uppkom det? Vad är centralt i React?
React skapades av Meta (f.d Facebook) för att enklare bygga frontend och UI. Centralt i React är komponenter och Hooks.

### Vad är JSX?
JSX står för ”Javascript XML”. JSX låter oss skriva HTML-liknande kod i React. Det används till exempel när man bygger komponenter.  

### Vad är en komponent?
Komponenter fungerar som byggstenar. I stället för att till exempel kopiera in samma header-HTML på en hemsidas alla undersidor kan man bygga komponenten i en egen fil, och länka till den där man vill att den ska visas. Det gör att man totalt får en lättare hemsida med mindre kod och sparar stora mängder tid. Det minskar också risken för misstag och fel då du vet att din komponent (t.ex header, footer, bildgalleri, formulär osv) kommer att se ut och bete sig på samma sätt oavsett var du placerar den. Du behöver alltså bara göra ändringar på ett ställe, inte på alla ställen där elementet finns.

### Vad är props?
Props, förkortning för properties, är argument som används i komponenter. Man kan exempelvis ha en komponent som är ett bildspel för produkter man säljer. I stället för att bygga ett bildspel tusentals gånger för varje enskild produkt kan man länka till bildspelskomponenten och bara behöva deklarera props, i det här fallet sökväg för bilderna som ska vara med i det enskilda bildspelet.

### Vad menas med one-way-dataflow?
Att data skickas från parent ner till children. För att data ska kunna skickas från children till parent behöver man använda sig av callbacks.

### Hur kan man använda sig av konditionell rendering i React?
Konditionell rendering är användbart när man vill rendera olika saker beroende på t.ex status. Ett exempel är i en todo-app, där man då kan rendera texten på olika sätt beroende på en boolean. ”Om todo.status är true, rendera texten genomstruken, annars rendera vanlig text”.  

### Vad menas med en återanvändbar komponent?
Se svar i fråga nr 3 ovan. 

### Vad är state i React?
Status/tillstånd av en komponent eller del av en komponent. Med hooken useState kan man deklarera ett utgångsvärde och sedan uppdatera det utan att behöva rendera om hela sidan. Det är väldigt bra för prestandan.

### Vad är det för skillnad mellan state och props?
Props är information som skickas från parent-element till child-element. Props följer alltså en hierarki och är även immutable. State däremot kan ändras och hanteras på komponentnivå.

### Vad menas med en kontrollerad komponent i React?
Det betyder att komponentens värden deklareras och uppdateras med state.

### Vad är en callback handler?
Ett sätt att få information att gå från child-element till parent-element så att något som förändrats i child-elementet kan påverka parent-elementets state.

### Vad menas med "lifting state up”?
Om man vill att flera komponenters state alltid ska uppdateras tillsammans kan man flytta/ta bort state från de komponenterna och i stället lägga det på det närmsta parent-elementet. Sedan skickar man state ner till komponenterna via props.

### Vad är syftet med useEffect-hook i React?
useEffect-hooken används för att hantera sidoeffekter, i den här uppgiftens fall datahämtning och uppdatering av localStorage. Sidoeffekter är sådant som inte direkt har att göra med rendering av UI.

### Vad är syftet kring den s.k dependency-arrayen i useEffect?
Dependency-arrayen finns till för att styra när useEffect ska köras. Om arrayen är tom kommer useEffect bara köras vid ”mounting”. Finns den inte alls kommer useEffect att köras vid varje rendering. Om man däremot anger ett eller flera värden i arrayen kan useEffect köras igen när något av de värdena uppdateras.

### Vilka fördelar finns det med att använda NextJS? Nackdelar?
Jag tycker att det har varit väldigt smidigt att arbeta med Next när jag väl kom in i det. Next sköter routing på ett sätt som är enkelt att förstå. Det är också skönt att helt slippa HTML-filer. Att bygga sidan när den var färdig var också förhållandevis enkelt, Next ger tydliga varningar och förslag på förbättringar, även i dev-miljön. Att deploya sidan med Vercel var enkelt och gick fort eftersom att Vercel är skaparna bakom Next. En nackdel med Next är att det inte har ett inbyggt ”state management”. Man behöver då utöver att lära sig Next även bekanta sig med t.ex Redux.

### Vad menas med Routing? På vilket sätt löser NextJS Routing v.s "vanliga React”?
Routing är ett sätt att länka mellan olika undersidor i den hemsida man bygger. React kan egentligen bara producera det som kallas för en SPA (”Single-page app”). Routing med Next är väldigt simpelt och kräver inga större mängder kod, till skillnad från andra routing-lösningar så som React Router.

### Vad menas med Reacts ekosystem? Nämn några viktiga bibliotek i Reacts ekosystem?
De bibliotek, ramverk och state management-bibliotek som ofta används tillsammans med React för att göra React så bra som möjligt. Exempel är Next.js, React Hook Form och Redux Toolkit som jag har använt mig av i den här uppgiften.

### Vad är syftet med useContext? Vilket problem med props löser den?
useContext är en hook som gör att man kan ge en kontext till en komponent. I den här uppgiften har jag använt det för att låta användaren ändra mellan dark-mode och light-mode. Kontexten läggs runt det översta elementet man vill att den ska påverka med en ”provider”. Kontexten appliceras då på varje element inom providern. Hade man försökt lösa samma uppgift med props hade man behövt skicka förändringen dark till light till varje child-element. useContext gör att man bara behöver skriva ut vad som ska hända en enda gång i en fil.

### Vad är Redux Toolkit? 
En state manager som gör att du kan deklarera state i en store-fil, och i den hämta in en eller flera reducers. En reducer är återanvändbar och kan användas på olika komponenter.

### När, i vilka situationer vill man använda Redux Toolkit?
Som tidigare nämnt finns inget inbyggt state management i React. State management är lite som att skapa återanvändbara funktioner för att deklarera och uppdatera state av komponenter. All logik och state-hantering samlas på ett ställe (och görs tillgänglig för alla komponenter), och är på så sätt lättare att läsa, överblicka och förändra. Detta är framför allt användbart när man bygger större komplexa projekt.

## VG-uppgift:
Jag använde mig av biblioteket motion ([motion.dev]()) för att implementera två olika typer av animationer som gör min JobChaser lite mer levande. Den ena animationen förstorar det jobbkort man hovrar över. Den andra animationen är kopplad till en räknare som agerar ihop med sökresultatet. I stället för att som tidigare statiskt visa ”Result: {sökresultat.length}” räknar den initialt upp från 0 till max (i det här fallet 10). Om man sedan skriver i sökrutan räknar den ner från 10 till antal sökresultat.

Den första animationen ligger i JobCard.tsx, den andra i Results.tsx.

### Om min kod:
Över lag är jag nöjd med min JobChaser. Det har varit en stor uppgift med mycket nytt att lära sig. Jag känner att resultatet är en stabil grund att bygga vidare på i backend-kursen. Jag har komponenter, kontext och state management som jag kommer att kunna gå tillbaka till, förstå, och uppdatera vid ett senare tillfälle.

### Saker som kan förbättras: 
Med tanke på att det var mycket nytt att lära sig har jag inte lagt tid på att mobilanpassa sidan, den har bara en storlek, som är gjord för desktop och gör sidan i princip oanvändbar om man går in på den med telefonen. Jag kunde också ha gjort sökrutan på jobbsidan till en egen komponent, men i början av kursen när jag byggde just den delen var det lite för svårt, eftersom att jag inte hade greppat state-konceptet tillräckligt. Jag kunde också ha använt mig av CSS-moduler för förbättrad prestanda i stället för att importera CSS-filer i globals.css.

### Länk till Vercel-deploy: 
[JobChaser - Moa Sjögren](https://jobchaser-moa-sjogren.vercel.app)
