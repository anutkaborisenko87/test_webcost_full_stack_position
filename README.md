
## About this project

Here is a link shortening service.
Any visitor can register a link, which will be shortened and displayed at the bottom of the table below the link registration form.
On the input form, there is validation for the validity of the url of the link (it is validated from the front side by the form itself, as well as from the back side).
You can follow a shortened link both from the table directly, and by copying the link address in the table and pasting it into the address bar of your browser.
Queues in Laravel are used both for registering links and for counting redirects. For high-load projects, the use of queues, in my opinion, is the most optimal solution.
According to the terms of reference, I did not quite understand what it means, Track
redirects through the application, so it was decided to simply count the number of clicks / clicks on the shortened link. The number will be counted using the queue, therefore, all transitions will be counted in the order of the queue.
Initially, queues are processed synchronously. For asynchronous operation of queues, it is necessary to configure the server where the project will be cloned.

When creating this project, the Laravel framework was used.

### Technologies used in the project:

- back part - writing changes to the database through laravel queues,
- front-end - vue js components. Sending to the back, receiving data from the back - axios using vuex.

## From the author

Perhaps the work is not perfect, and there are flaws.
I would be glad to any criticism, because I understand that in this direction I still have a lot to learn and master.

## Instructions for checking this project:
To check the functionality of the project, you need to clone the project:
```
git clone https://github.com/anutkaborisenko87/test_webcost_full_stack_position.git <project-directory>
```

and enter the following commands in sequence

```
cd <project-directory>

composer install

cp .env.example .env

php artisan key:generate
```
after the database for this project is created in MySQL and its settings are added to the .env file
```
php artisan migrate

npm install

npm run dev

```

To configure the operation of laravel queues in the console, you must enter the command

```
php artisan queue:work
```


### Contacts

- **Linkedin: [Anna Borisenko](https://www.linkedin.com/in/anna-borisenko-695837213/)**
- **Telegram: [Anna Borisenko](https://t.me/AnutkaBorisenko)**
- **email: [anutkaborisenko87@gmail.com](anutkaborisenko87@gmail.com)**
