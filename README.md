# IKAROS AND PARTNERS

#### Web Public Area Frontend List
 - [01_Ikaros_Home_Page](https://orcunkilicaslan.github.io/IKAROS_Frontend/01_Ikaros_Home_Page.html)
 - [02_Ikaros_Sign_Up](https://orcunkilicaslan.github.io/IKAROS_Frontend/02_Ikaros_Sign_Up.html)
 - [02_Ikaros_Sign_In](https://orcunkilicaslan.github.io/IKAROS_Frontend/02_Ikaros_Sign_In.html)
 - [03_Ikaros_Job_Listings](https://orcunkilicaslan.github.io/IKAROS_Frontend/03_Ikaros_Job_Listings.html)
 - [03_Ikaros_Job_Listings-Boxes](https://orcunkilicaslan.github.io/IKAROS_Frontend/03_Ikaros_Job_Listings-Boxes.html)
 - [99_Component_Form_UI](https://orcunkilicaslan.github.io/IKAROS_Frontend/99_Component_Form_UI.html)
   

# NodeJS Kurulumu
  
### NodeJS Kurulumu  
Öncelikle **npm** paket yöneticimizin olması lazım, yoksa [NodeJS](https://nodejs.org/) ‘in resmi sitesi olan [nodejs.org](https://nodejs.org/en/download/)’tan NodeJS’i bilgisayarımıza yüklememiz gerek.  Yüklemeyi yaptıktan sonra _terminal_ yada _command prompt’_a  
  
     npm install --global gulp-cli  

yazmamız gerekmektedir. Bu sayade Gulp’un cli(Command Line Interface)sini bilgisayarımıza yüklemiş olacağız, bu bize Gulp’u terminalimizde **gulp** komutunu (command) kullanmamızı sağlıcaktır. Bu işlemi de yaptıktan sonra Gulp görevleri yazmaya başlayalım.  
  
  
#### Projeyi PC'ye İndirme  
Komut Satırına Aşağıdaki Kodu Yazın  

     git clone https://github.com/orcunkilicaslan/IKAROS_Frontend.git  

#### Projeyi PC'de Çalıştırma  
Komut Satırına Aşağıdaki Kodu Yazın  

     npm install
     npm install -g npm  


Projeyi Derleyecekseniz İse Komut Satırına Aşağıdaki Kodu Yazın  

     gulp build

Projede Çalışacaksanız İse Komut Satırına Aşağıdaki Kodu Yazın  

     gulp devel  