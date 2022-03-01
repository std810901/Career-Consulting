<template>
  <div id="header_section" class="header_section">
    <div class="container-fluid">
      <nav class="row">
        <div class="col-12 p-0">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <a href="https://talfin.ai/">
                <img class="brand_img" src="/logo_talfin.svg" />
              </a>
            </div>
            <div class="d-none d-sm-block">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/talfin/"
              >
                <img
                  class="linkedin img_rwd mr20"
                  src="~assets/images/ic_in.svg"
                />
              </a>
              <a target="_blank" href="https://www.instagram.com/talfin.ai/">
                <img
                  class="instagram img_rwd mr20"
                  src="~assets/images/ic_ig.svg"
                  alt=""
                />
              </a>
              <a target="_blank" href="https://lin.ee/fKyFgGt">
                <img
                  class="line img_rwd"
                  src="~assets/images/ic_line.svg"
                  alt=""
                />
              </a>
            </div>
            <div class="d-sm-none d-block">
              <a
                href="javascript:;"
                data-bs-toggle="modal"
                data-bs-target="#menuModal"
              >
                <img class="" src="~assets/images/ic_menu.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lastScrollTop: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrolling)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrolling)
  },
  methods: {
    scrolling () {
      const direction = this.detectScrollingDirection()
      const headerSection = document.getElementById('header_section')
      // 檢測上下滾動要做甚麼
      if (direction === 'down') {
        headerSection.style.transform = 'translateY(-100%)'
      } else if (direction === 'up') {
        headerSection.style.transform = 'unset'
        if (headerSection.querySelector('.brand_img').getAttribute('src') === '/logo_talfin.svg') {
          headerSection.querySelector('.brand_img').setAttribute('src','/logo_talfin2.svg')
        }
      }
      // 滾軸Y的數字
      if (window.scrollY > 0) {
        // 非頂部
        headerSection.style.backgroundColor = 'rgba(60, 60, 60, 0.5)'
      } else {
        // 頂部
        headerSection.style.backgroundColor = 'unset'
        headerSection.querySelector('.brand_img').setAttribute('src','/logo_talfin.svg')
      }
    },
    detectScrollingDirection () {
      const st = window.pageYOffset || document.documentElement.scrollTop
      if (st > this.lastScrollTop) {
        this.lastScrollTop = st <= 0 ? 0 : st
        return 'down'
      } else {
        this.lastScrollTop = st <= 0 ? 0 : st
        return 'up'
      }
    }
  }
}
</script>

<style></style>
