module.exports = {
  age: function(timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)

    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()

    if (month < 0 || month == 0 && today.getDate() <= birthDate.getDate()) {
      age = age - 1
    }

    return age
  },
  date: function(timestamp) {
    const date = new Date(timestamp)
    const year = date.getUTCFullYear()
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`
    }
  },

  graduation: function(graduation) {
    let schooling;

    switch (graduation) {
      case "medio":
        schooling = "Ensino Médio Completo";
        break;

      case "superior":
        schooling = "Ensino Superior Completo";
        break;

      case "mestrado":
        schooling = "Mestrado";
        break;

      case "doutorado":
        schooling = "Doutorado";
        break;

      default:
        break;
    }

    return schooling
  },

  grade: function(grade) {
    let school_year;

    switch (grade) {
      case "5AF":
        school_year = "5º ano do ensino fundamental";
        return school_year;

      case "6AF":
        school_year = "6º ano do ensino fundamental";
        return school_year;

      case "7AF":
        school_year = "7º ano do ensino fundamental";
        return school_year;

      case "8AF":
        school_year = "8º ano do ensino fundamental";
        return school_year;

      case "1EM":
        school_year = "1º ano do ensino médio";
        return school_year;

      case "2EM":
        school_year = "2º ano do ensino médio";
        return school_year;

      case "3EM":
        school_year = "3º ano do ensino médio";
        return school_year;

      default:
        break;
    }

    return school_year
  }
}