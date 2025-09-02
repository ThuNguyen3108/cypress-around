/// <reference types="cypress" />

beforeEach('Open application', () => {
  cy.visit('/')
})

it.only('datepickers', () => {
  // Mở menu Forms -> Datepicker
  cy.contains('Forms').click()
  cy.contains('Datepicker').click()

  // 👉 Hàm chọn ngày trong lịch
  function selectDateFromCurrentDay(daysFromToday) {
    // Tạo ngày trong tương lai
    let date = new Date()
    date.setDate(date.getDate() + daysFromToday)

    let futureDay = date.getDate()
    let futureMonthLong = date.toLocaleDateString('en-US', { month: 'long' })
    let futureMonthShort = date.toLocaleDateString('en-US', { month: 'short' })
    let futureYear = date.getFullYear()
    let dateToAssert = `${futureMonthShort} ${futureDay}, ${futureYear}`

    // Mở ô datepicker
    cy.get('[placeholder="Form Picker"]').then(input => {
      cy.wrap(input).click()

      // Đệ quy chọn đúng tháng/năm rồi click ngày
      function pickDate() {
        cy.get('nb-calendar-view-mode')
          .invoke('text')
          .then(calendarMonthAndYear => {
            if (
              !calendarMonthAndYear.includes(futureMonthLong) ||
              !calendarMonthAndYear.includes(futureYear)
            ) {
              cy.get('[data-name="chevron-right"]').click()
              pickDate()
            } else {
              cy.get('.day-cell')
                .not('.bounding-month')
                .contains(futureDay)
                .click()
            }
          })
      }

      pickDate()

      // Kiểm tra giá trị trong input
      cy.wrap(input).should('have.value', dateToAssert)
    })
  }

  // 👉 Gọi hàm: truyền vào số ngày muốn cộng thêm
  selectDateFromCurrentDay(50) // chọn ngày sau 50 ngày
})
