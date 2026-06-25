import { Link } from "react-router-dom";
import Products from "./Products";


function Home() {
  const heroStyle = {
    background: "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
    color: "white",
    padding: "90px 40px",
    textAlign: "center",
  };

  const sectionStyle = {
    padding: "70px 40px",
  };

  const titleStyle = {
    fontSize: "38px",
    textAlign: "center",
    marginBottom: "15px",
    color: "#505050",
  };

  const subTitle = {
    textAlign: "center",
    color: "#3c3737",
    marginBottom: "40px",
    fontSize: "18px",
  };

  const cardContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
    color:"rgb(42, 39, 39)"
  };

  const cardStyle = {
    width: "260px",
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,.12)",
    transition: "0.3s",
    cursor: "pointer",
  };

  const productCard = {
    width: "280px",
    background: "white",
    borderRadius: "18px",
    padding: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,.12)",
    textAlign: "center",
    transition: ".3s",
    cursor: "pointer",
  };

  const buttonStyle = {
    marginTop: "25px",
    padding: "14px 30px",
    border: "none",
    borderRadius: "30px",
    fontSize: "17px",
    cursor: "pointer",
    backgroundColor: "#facc15",
    color: "#111",
    fontWeight: "bold",
  };
 const heading=
 {
  color: "#545151",
 }
  return (
    <>
      {/* HERO */}

      <section style={heroStyle}>
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "15px",
          }}
        >
          TechHub
        </h1>

        <h2
          style={{
            fontSize: "32px",
            marginBottom: "20px",
          }}
        >
          Everything Tech, One Destination
        </h2>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "1.7",
          }}
        >
          Discover premium laptops, flagship smartphones,
          gaming accessories, smart wearables and the latest
          electronics at unbeatable prices.
        </p>

        <Link to="/products">
          <button style={buttonStyle}>
            Shop Now →
          </button>
        </Link>
      </section>

      {/* BRANDS */}

      <section
        style={{
          background: "#f4f7fb",
          padding: "25px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Trusted Brands
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            fontSize: "22px",
            fontWeight: "bold",
            color: "#555",
          }}
        >
          <span>HP</span>
          <span>ASUS</span>
          <span>Apple</span>
          <span>Samsung</span>
          <span>Lenovo</span>
          <span>Dell</span>
        </div>
      </section>

      {/* CATEGORIES */}

      <section style={sectionStyle}>
        <h1 style={titleStyle}>Browse Categories</h1>

        <p style={subTitle}>
          Shop products from your favourite category.
        </p>

        <div style={cardContainer}>
          {[
            ["💻", "Laptops", "Gaming, Student & Office"],
            ["📱", "Smartphones", "Latest Android & iPhone"],
            ["🎧", "Headphones", "Noise Cancelling Audio"],
            ["⌚", "Smart Watches", "Fitness & Lifestyle"],
          ].map((item) => (
            <div
              key={item[1]}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";
              }}
            >
              <div
                style={{
                  fontSize: "55px",
                  marginBottom: "15px",
                }}
              >
                {item[0]}
              </div>

              <h2>{item[1]}</h2>

              <p
                style={{
                  color: "#666",
                }}
              >
                {item[2]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING PRODUCTS */}

      <section
        style={{
          ...sectionStyle,
          backgroundColor: "#f8fafc",
        }}
      >
        <h1 style={titleStyle}>
          🔥 Trending Products
        </h1>

        <p style={subTitle}>
          Best selling gadgets chosen by our customers.
        </p>
       
        <div style={cardContainer}>
          {[
            [
              <img src=" data:image/webp;base64,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" alt=" laptop img " width="120px" height="120px"/>,
              <h3 style={heading}>HP Victus</h3>,
              "RTX 4050 • Intel i5",
              "₹74,999",
            ],
            [
              <img src="data:image/jpeg;base64,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" alt="iphone 16 img"  width="120px" height="120px"/>,

              <h3 style={heading}>iPhone 16</h3>,
              "128GB Storage",
              "₹79,999",
            ],
            [
             <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQEBIWFRUVEBIQFRYVERYSFhYVFRYXFxUSFxUYHSggGBolGxYXIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGRAQGi0fHSUwKy0tLSstKy0rLTEtLS0tKy8vLS0tKy0tLi0tLSsrLS0vLS0tLS0rLS0rLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYEBwECAwj/xABGEAACAQICBgYFCQUGBwAAAAABAgADEQQhBQYSMUFREyJSYXGBFDKRodEHI0JicoKiscEVY5Ky8CQzU1ST4TREc4OjwvH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgEDBP/EACERAQADAAEFAQADAAAAAAAAAAABAhEhAxIiMUFhE1FS/9oADAMBAAIRAxEAPwDeMREBERAREQEREBERARIHE1Q7FtrwHITysO1AscSuWHaiw7UCxxK5Ydqc2HagWKJXbDtTtTfZIYNuP9CBYInWm1wCOIB9s7QEREBERAREQEREBERAREQEREBERAREQE8MfX6OmzngpPwnvI3T9JXpbD32S63ANr261rjMZgQIRNKUyQAMzuymR6QOzMWjo+ijB1U3F7XqO1rixsGYjdMzbWbOfGRrr6QOzHTjszsHWNtZjXX0gdmPSB2Z221jbWB19IHZnhV0kinZIztfdMnbWYuIwVJ222U7Wzs3DumV726pHEybd2ePtVO3fL1+J/Q2KFSkGHAlfZu91pnSH1doJTFRad7FlexJbMi285/REmIrueXst274+iIiUkiIgIiICIiAiIgIiICIiAiIgIiICQetmAaulOnTqGm3S32gNohQjX6txfPZ48ZOSKx+KUMzMbLSQknlltOfYB7DAqmDwrYc1KbVmrEOOsyhbdVTsgAniTMj0iR6Ygldt8i5aoRyLkts+V7eUjsbp6lT3sJgnziY9KlTTTFar/cYeq4O4rTYr/Fa3vnZ00ic/RSPtVaS/wAziaLV6VOfSZU0TSP+Wv8AZrUW/J4fSeJp/wB9haqjiejYr/EBb3wLb6RMfHqaqhBUNMl6Y21FyLsAcuIsZBYLWGlU+laShcOpCnepAI4XGRmCy6p6LfDvVWpWNW60ypK7FrF9oWub/Rz75ZJA6K0iKi0q+7aXZfuYnZdfJxbyMnpoREQEREBERAREQEREBERAREQEREBERAxtIYsUqbVDwGQ5scgPbKVp0VauFdKNjUYqSCQNsbYZ1ucgSL92cyNYdLCrUYbYWhh7l6jGy7W4sT3eqBxN+c1hrT8ojNejgSadPMGqR84/2ewvv8IEtpfELTzx+I6L9xRIqVj9oi6p798rtbXVKX/BYWnTPCpV+fq353a+z5Sml2ck5knMkm58yZ6JheZ9kCWx+t+MrX28RUIPANsAeAEimxznMux7y5J9s9FpAcP1nbdA8RjH7R8mIP5ySwOtGLpW6PEVRb65YHuIO+Yh/W3s4ToUHKBaKOvJqZY3D0sRw29noqoHIVFsbyf0TjKFU/2LEFX/AMviSFJ7kqjI8rH2zWjUOU8zdf6/IwN/auUa9OlUXELsFqzuqbQYqpVb3IJGbBjYHj3y7aGxvS0wT6y9RvEcfMZz5+1W1/q0LUsRetR3Zn5ymOaMd47jllwmz9C6bRGXE0nD4epZHYfR+0N6st9x4EwNgROAb5icwEREBERAREQEREBERAREQEREBILW3SwoUiocIzKzNUO6lSHr1T38FHEnuMmqtQKCx3AXM+eflX1rNes+HQ9RXHS2PrOvq0r9lPe20YEHrbrQcSRSpAphqZ+bp8WP+LUtvY8uG4cTIGhRLZnd+f8AtOuFo7Rud35n4TPgcKtshOZN6A1ebEddiUp3tcesxG8Lf8/zzta6OgsMgsKKnvfrn8UDXEmtSx/bsPfhVv5hWIPiCAfKW1tGYf8AwKX+mvwmVoXA0Vr02WjTDAmxCKCOqdxtNYqGvpvigxzLYagzHix2LXJ4mwHslcm19IaOpVGps9JGPQUhdkDG1t1yJ2o6vYc/8vS/0l+EqY5lkTxDU8yqVLKxG/f8JtOrqthmFjh6Y+yuwfatpV9YdVTRBq0SWQZspzZRzB4r7x3ycbqkYrBW6ybuXEeEztWdYqmEcletTbKrSJ6tRf0YcDw8J3kdj8Nbrr5jl3zGvozUfT1OpSVBU2qezeizZHZGRoPyqIcrcQRbcZbFN8xmDmJ8w6j6wej1ejqMRRqkBze3RvuWsOVtx5qTyn0DqrpEurUKlhUpG2XFfosO7490necVFdjU9ERKSREQEREBERAREQEREBERApnyo6x+h4RiptUayU/ttfZPkAz/AHBPmcAu1r8d5z8SZsT5bdNdLi1oA9Wkm2c/p1PVuO6mqfxmVDVzCBtqowuB1R+v6QJfSejaVDD0RZhXbrsNoEBCMrgbje1vvXkfgcMatRKQ+m6rfkCcz5C5nXEKAzBd1/8A7M7VxwuKok/4mz5sCo95E2WQ2KlMIoRRZVAUDkBuE8KrTJqCYlUTGsapVmToN7108T/KZhVEkloCh86p5E/ymbEMlJrSv0Z/cU/ykjSW08cOnVpn9yn5TJUTvMOUPYLPKtSnqk7PunOVNO6yaPFDEPTUWW4de5WF7eANx5RoTRa19sMTkBZVAJYm/Ph8ZIa/1AcXYfRo01Pjdm/JhK4rWO+3O3LjJ+q+InSOF6Gq9MHaAYgNwIBtebY+TjWAtSp1Cbvh2XDVc82ov/cufDNL9xMoesejV6EVaSVCqnOo6hVYNYdVfHPeZz8nOP2MYtJvUxCthmF7ZsL0z47aqPvmRevDp07RE8+vr6gVgQCNxFxOZh6IpstFA5BOyMxuscxa/C0zJqSIiAiIgIiICIiAiIgJ44x9mmxG8KbeNsvfPaYWmXtRY96/zCB8o64YzpcZiKnA4ioB9lD0a/hUS16J0GU0eMRtWPRmts24HMZ87WmvK1Ut1jvILnxOZm3tNjo9GBBwo4dPel/cDLpETuptPpQLTkEjMGxBuCOBG4ziJCmyNB6VXE0wbgOAA68j2gOyf9pl1EmsMPXZGDoxVhuINj/XdJ7D631gLOqP32Knztl7oFup4e5k7orCWIy5/kZU9WdN1MQzE0lVFGZBJux3KPLM+XOXPQ+O+eprYAFwL3nWtZzUWtzj1w1IinTBBB6JMiLH2T1CRp/SOzWIUBhsoQb77jukd+1T2R7TK7bTynYjhKgTD0rjko02q1DZVBPee4d8xm0q3BQPaZQ9dtLGo4o7VwvWf7XBfADPxPdMmsxGy2J3iFfx2LarUeq/rOxY919wHcBYeU8JxE4uiYpYfpsOb0yx2Gp9JUrhVWwyCKbbhbK5lLwuJNNlqL6yMtQfaQhh7wJctDKCrXWiSG31qpThuChhcd8pldbVGX94y5bvWIylSyH11oWuHoow3Wy8Po+60zpWfk4rl9HYdjvNCgT4mjTJ98s0lpERAREQEREBERAREQEwdNJeiw+z/MJnTHx6XpuOOwSPEC498D4zqIQLHeF2T4gWIm4NYTt6NDDd0eHfyJT4zWWtGE6LF4in2cRVt9lmLL+EibC0Vjkq6JszqCuHakQSLh0uEFu+y28Z0p9hFvilxEGc1k70aTOwRRdmIUDmTunSW7UnRm/EsOaU/wAmf/1/ilVr3TjLTkLFovALQpLSXgLk9pj6zf1wtLZqzgVs+Jq+oqsBfwO23suPM8pAU1B9ZgqgF3Y7kRRdnPgATPLBuSGrsCrYgU9lDvp4VLnD0j9Zrmo3MsvfPTb/ADDjH9y96zgnqKEQAKiKLBEXJUA7hOkRLjhLC0xpAUKRqcfVQc2O7y4nuE107kkkm5JJJPEnMmSms2k+mq2U9RLqvIn6Tf1wHfIeeXqX2Xalch3idJlYF6QY9Orldkj5sgMDcWOeR45TmtnaGI2W61C+1urKxOQ3ghSAM+fCUzENeo5/eOct3rHd3TYR0hTWiejxV1SmbUq9BWNgMlDWtea4pUi5CLmzEIPtNkPeRKsmH1L8mlIro3DA7/R6F/8ARpy0SO1fw/R4emg4LYeAyHuAkjJUREQEREBERAREQEREBERA+a/lo0P0GO6QCy1U/HTsp/AaXvkFqhWBLUwivU2lamGvyYsuQuR3XFyRv3Td/wAsmrhxWELot6lP5xLbyyg3X7yFh4hZ86YHFGlUWqueywNuBHFT3HlNhkp6tRKEo28ZGzBveCROkz8fjEqqrAsWGyFuoCins22draJbMXuQPWbutgRLYZGjsIatVKQy22AvyG9j5AE+U2fRpBFCKLKoCgcgN0oOqDD0pL8VcDx2T+l5sETv0Y41x6k8vPEoKjDDHNNlMTiv+le9DC+NVwGP1FB5z3qVCxLNvJJPifyENUvfJRcqWIVVLlVCKzkC7EKAATwnWdK1zZlMySF1q0n0NLYU9epdR3L9Jv0Hj3SYq1AoLMbBQWJ5AZkzW2lsea9Vqh3HJRyUbh+viTJ6tshtK7LEicTmeV3JzOIgNM6RvRFMqNq6qGG8Iq2KW5XzJ5sZ3+TrRvT4+iLXFMnEN/27bH/kNP3yBx2I23y3DIfGbd+SLQBWh0xHXxLKF7qS32W8+u/8EDcOi6u1SUgWFioBuDZSV3HwmVOtNAoCjcAAPATtAREQEREBERAREQEREBERA8sTQDqUbcRbw5Ed4Oc+YvlL1XbCYl3VbU3qNu3JUPWZO5WB2l7jbhPqKVP5QdApiKDOybYCbNVB6zUgb7S8nQ9YfeHEQPmXRuKt1G3cO48pKTG1l1ffCuATt03G1SqgdWov6MOI4eExcFj7dV924Hl3GBNYSuabrUXerBh5cD3HdNl6PxqVkFSmcjvHFTxU94mrhnnMrR+PqUW2qTFTxG8HuIORnTp37UWrraESm0tcnA61FSeYYqPYQZi47WmvUBVbUwezfa/iO7ytO38tXPslI646WFvRkPG9Qju3J7cz4DvlTnE5nntbunXaIyCIiS1zI7SeMsNhd/0u4cvGcY3SNurTOfFuA8J10JoeriqopUhcnrMx9VF41HPAD+s4Gbqfq+cZXCEHo1KmqRkbE2Wmp7TnIeZ4T6X1awAVdu1gB0aC1gAMmIHAZADuUStfJxqpSp0bhT0fWVCbo1Vz1amIJGY7KjgL8xNgIoAAAsALAQO0REBERAREQEREBERAREQEREBERA1jrZq/Tpu1GpTD4WuS6ru6N+OwfosL3FuBtwmpdadSauGBq0r1qG/pAOsg5VVG77Qy8N0+mdN6OGIpNTO/1kPJxuP6eBM1zpWrVoUHqUl+cUqlmGQ2nVGLDiBcm3dA0NQxD09xy5bx/tJGhpND63VPtHtly0toKhVu1akcPUOZq0FLUieb0N4+6c5XMXqXXsXobGIQfSouCR3MhzB7rQPNHBzBB8Ded5BYjAVKZs6Mp5MhUzoHfgzeTkQLBDMBmSB4m0r5epxdv4z8Z2pYR3NlBYndYFiYEnW0kg3dY9272yPr4t6mW4ch+p4yZwWpuJYbdRBRTt13FJfYc/dLDovV3D08wpxbji6mlh1+761TwyBgV7VjVKtiztL1KQPWrOOqOYQb3buHmRNratauU9pcFhlK0snr1D/eVAN5ZuZ3ADIX3ZRoSvWqUm6ZVU06rUl2F2UKhVN1XhbaI8psPVfRnQUrkdepZ25jsr5D3kwJWlTCqFUAKoCgDIAAWAA5WneIgIiICIiAiIgIiICIiAiIgIiICIiAlb0zoxWdwR1aqG/mNlx+v3pZJEayYzoUSp0bVOvslUALWKkkgEgbwvGBQhg+rsuLspKN4qdkn3SNxOryk7SjZYbmU7LDwI3SzpXFZnqCnUp3YdWooU+qtyLEi1/1nc0IFObBYpRYV2YcqirVv4lwT75i1cFVO/D4Ru9sNn7mEvJw04OFgUangao3YbCDvGGN/exmXTwmKOXS7A5UqaU/xBdr3y3eizsMNAqlDV9b7bku3adi7e05yTGGCKSBuBO6TPo888TZAHKO4DoSqLtMRtC4AJHDvgSWhdD7PRUjnbrP3m+058Cx98t0gdW9Iiuzt0VSnsqoHSBVY3LbRspOWSyegIiICIiAiIgIiICIiAiIgIiICIiAiIgJFayOFpBmNgKi58r3GfdciSswtNYYVKFRCL3W/PNcx7xECq08bTY7IqKTy2hfLflPa4kZT0YAQRvG6ZPQNE58ZH6yriLiYvQNHQNAyriNoTF6Ax0BmDK2hPKrikU2Z1B32LAG3O08ugM8Kuj9o3O+1vLlMt3Z4+/1dO3fL1+LPqzUVukZTexVb8L2Jt7xJuRWrOEFKgBb1mZzla/AH2ASViu55ey3bvj6/SIiUkiIgIiICIiAiIgIiICIiAiIgIiICDEQKPXoFGKFs1Np02frS44jR9NztOtzzuR7bHOeX7Ho9j8b/GBU7fWi31pbP2PR7H43+Mfsej2Pxt8YFTt9acW+tLb+x6PY/G3xj9j0ex+N/jAqdvrTlUJNg2ZNh5y1/sej2Pxt8Z6UdGUkIZUzG65J87EwPbC09lFXsqq+wWnrEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//Z" alt="" width="145px" height="155px" />,
              <h3 style={heading}>Galaxy Watch</h3> ,
              "Health Tracking",
              "₹19,999",
            ],
          ].map((item) => (
            <div
              key={item[1]}
              style={productCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";
              }}
              onClick={ ()=>{location.pathname="/products"}}
            >
              <div
                style={{
                  fontSize: "65px",
                }}
              >
                {item[0]}
              </div>

              <h2>{item[1]}</h2>

              <p
                style={{
                  color: "#666",
                }}
              >
                {item[2]}
              </p>

              <h2
                style={{
                  color: "#2563eb",
                }}
              >
                {item[3]}
              </h2>

              <button
                style={{
                  padding: "10px 20px",
                  borderRadius: "25px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "#2563eb",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                View Product
              </button>
            </div>
          ))}
        </div>
      </section>
            {/* WHY CHOOSE US */}

      <section style={sectionStyle}>
        <h1 style={titleStyle}>Why Choose TechHub?</h1>

        <p style={subTitle}>
          We provide the best shopping experience with trusted products.
        </p>

        <div style={cardContainer}>
          {[
            ["🚚", <h3 style={heading}>Free Delivery</h3> , "Fast shipping across India."],
            ["🛡️", <h3 style={heading}>1 Year Warranty</h3>, "Official brand warranty."],
            ["💳", <h3 style={heading}>Secure Payments</h3>, "100% safe online transactions."],
            ["📞", <h3 style={heading}>24/7 Support</h3>, "Always ready to help you."],
          ].map((item) => (
            <div
              key={item[1]}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
              }}
            >
              <div
                style={{
                  fontSize: "55px",
                  marginBottom: "15px",
                }}
              >
                {item[0]}
              </div>

              <h2>{item[1]}</h2>

              <p style={{ color: "#666" }}>{item[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}

      <section
        style={{
          background: "#2563eb",
          color: "white",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            textAlign: "center",
            gap: "40px",
          }}
        >
          {[
            ["10K+", "Happy Customers"],
            ["500+", "Products"],
            ["100+", "Brands"],
            ["24/7", "Customer Support"],
          ].map((item) => (
            <div key={item[1]}>
              <h1
                style={{
                  fontSize: "45px",
                  marginBottom: "10px",
                }}
              >
                {item[0]}
              </h1>

              <p
                style={{
                  fontSize: "18px",
                }}
              >
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}

      <section
        style={{
          ...sectionStyle,
          background: "#f8fafc",
        }}
      >
        <h1 style={titleStyle}>What Customers Say</h1>

        <p style={subTitle}>
          Trusted by thousands of happy customers.
        </p>

        <div style={cardContainer}>
          {[
            [
              "⭐⭐⭐⭐⭐",
              "Amazing products and super fast delivery. Highly recommended!",
              "- Rahul"
            ],
            [
              "⭐⭐⭐⭐⭐",
              "Best laptop prices I found online. Great support too!",
              "- Ayesha"
            ],
            [
              "⭐⭐⭐⭐⭐",
              "Excellent shopping experience and genuine products.",
              "- Arjun"
            ]
          ].map((item, index) => (
            <div
              key={index}
              style={{
                width: "320px",
                background: "white",
                padding: "25px",
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0,0,0,.12)",
              }}
            >
              <h2>{item[0]}</h2>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.7",
                  marginTop: "15px",
                }}
              >
                {item[1]}
              </p>

              <h3
                style={{
                  marginTop: "20px",
                  color: "#2563eb",
                }}
              >
                {item[2]}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}

      <section
        style={{
          background:
            "linear-gradient(135deg,#1e3a8a,#2563eb)",
          color: "white",
          textAlign: "center",
          padding: "90px 30px",
        }}
      >
        <h1
          style={{
            fontSize: "45px",
            marginBottom: "20px",
          }}
        >
          Ready to Upgrade Your Tech?
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "1.8",
          }}
        >
          Explore the latest collection of laptops,
          smartphones and accessories at exclusive prices.
        </p>

        <Link to="/products">
          <button
            style={{
              marginTop: "35px",
              padding: "15px 35px",
              border: "none",
              borderRadius: "35px",
              background: "#facc15",
              color: "#111",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Explore Products →
          </button>
        </Link>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          background: "#111827",
          color: "white",
          padding: "50px 30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          <div>
            <h2>TechHub</h2>

            <p
              style={{
                color: "#ccc",
                maxWidth: "300px",
                lineHeight: "1.8",
              }}
            >
              Your one-stop destination for premium
              electronics, gadgets and accessories.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>

            <p>Home</p>
            <p>Products</p>
            <p>Deals</p>
            <p>Contact</p>
          </div>

          <div>
            <h3>Contact</h3>

            <p>Email: support@techhub.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Mumbai, India</p>
          </div>
        </div>

        <hr
          style={{
            margin: "35px 0",
            borderColor: "#333",
          }}
        />

        <p
          style={{
            textAlign: "center",
            color: "#aaa",
          }}
        >
          © 2026 TechHub. All Rights Reserved.
        </p>
      </footer>
      </>
  )
}
export default Home;