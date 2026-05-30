<template>
    <footer class="bg-green-800 flex text-white px-8 py-10 mt-10">
    <div class ="flex flex-wrap justify-betweeen gap-8">

        <!--this is about of footer-->
    <div> 
         <div> </div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERURWANDA</h3>
        <p class="text-sm text-green-200">Discover the beauty of the land of a Thousand hills</p>
      </div>

    </div>



    <!--Quick Links  -->
    <div>
        <h3 class="text-yellow-300  font-bold text-lg mb-3">Quick Links</h3>
        <ul class="space-y-2 text-sm">
        <li>
            <RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink>
        </li>
    </ul>
    <ul>
    <li>

            <RouterLink to="/about" class="hover:text-yellow-300">About Us</RouterLink>
        </li>
    </ul>
    <ul>
    <li>
            <RouterLink to="/Services" class="hover:text-yellow-300">Services</RouterLink>
        </li>
    </ul>
    <ul>
    <li>
            <RouterLink to="/Conmtact" class="hover:text-yellow-300">Contact</RouterLink>
        </li>
    </ul>
    </div>          
            <!-- Destinations -->
            <div>
    <h3 class="text-yellow-300 font-bold text-lg mb-3">Destinations</h3>
    <ul class="space-y-2 text-sm">
    <Li>
    <RouterLink to="/" class="hover:bg-yellow-300">Northern Province</RouterLink>

    </li>
 </ul>
    </div>
 <Li>
    <RouterLink to="/" class="hover:bg-yellow-300">Western Province</RouterLink>
 </li>
 <Li>
    <RouterLink to="/" class="hover:bg-yellow-300">Northern Province</RouterLink>
 </li>
       <Li>
    <RouterLink to="/" class="hover:bg-yellow-300">Southern Province</RouterLink>
      </li>
    <Li>
    <RouterLink to="/" class="hover:bg-yellow-300">Eastern Province</RouterLink>
 </li>
 
    
    
    <!-- Contact Info -->
    <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">Contact</h3>
        <ul class="space-y-2 text-green-300">
            <li>ahantunyaburanga@gmail.com</li>
            <li>+078882362666262</li>
            <li>Kagugu Kigali Rwanda</li>
        </ul>
        </div>
        <!--place for copuyright-->
        <div class="border-t border-green-600 mt-8 pt-4 text-sm text-">
        <p class="text-center">c 2025 Visit Rwanda. All rights reserved</p>
        </div>
    </footer>
</template>
