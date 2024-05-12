Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


I multipli di tre sono tutti quei numeri che divisibili per 3 hanno resto uguale a 0;
Se il numero è divisibile per 3 e otterrò un resto uguale a 0, stamperò "Fizz" fin quando non sarò arrivato a 100.


I multipli di cinque sono tutti quei numeri che divisibili per 5 hanno resto uguale a 0;
Se il numero è divisibile per 3 e otterrò un resto uguale a 0, stamperò "Buzz" fin quando non sarò arrivato a 100.

Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Creo quindi un ciclo for creando una variabile I.
Partirà da 0, arriverà a 100, incrementando.
Dopodiché creerò tre condizioni if per capire quando assegnare Fizz, Buzz e FizzBuzz.

Inserendo le variabili in ordine 3,5 e 3e5 non funziona perché, funzionando a cascata, è ovvio che l'ultimo valore non verrà mai preso essendo già incluso nei primi due. Inserisco quindi la varibaile più "generale" e poi le due più specifiche.

Aggiungo ul in html con classe list; lo selezione in js con query selector e poi creo direttamente in js gli elementi di ul, li, con stili differenti. Per farlo, creo prima una variabile const che che vado ad aggiungere all'html tramite innerHTML.