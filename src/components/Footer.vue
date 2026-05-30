<template>
  <footer class="bg-green-900 text-white py-5 mt-10">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Footer Content -->
      <div class="flex flex-wrap justify-between gap-6 text-sm">

        <!-- Logo / About -->
        <div>
          <h3 class="text-yellow-300 font-bold text-base">
            TEMBERURWANDA
          </h3>
          <p class="text-green-200 text-xs mt-1 max-w-[180px]">
            Discover the beauty of the Land of a Thousand Hills.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-yellow-300 font-semibold mb-2">
            Quick Links
          </h3>

          <ul class="space-y-1 text-xs text-green-200">
            <li>
              <RouterLink to="/" class="hover:text-yellow-300">
                Home
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/about" class="hover:text-yellow-300">
                About
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/services" class="hover:text-yellow-300">
                Services
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/contact" class="hover:text-yellow-300">
                Contact
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Destinations -->
        <div>
          <h3 class="text-yellow-300 font-semibold mb-2">
            Destinations
          </h3>

          <ul class="space-y-1 text-xs text-green-200">
            <li>Northern</li>
            <li>Western</li>
            <li>Southern</li>
            <li>Eastern</li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-yellow-300 font-semibold mb-2">
            Contact
          </h3>

          <ul class="space-y-1 text-xs text-green-200">
            <li>📧 info@temberurwanda.com</li>
            <li>📞 +250 788 823 626</li>
            <li>📍 Kigali, Rwanda</li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-green-700 mt-4 pt-2 text-center text-[11px] text-green-300">
        © 2025 TEMBERURWANDA
      </div>
    </div>
  </footer>
</template>