import React, { useEffect, useState } from "react";
import { map, sum } from "lodash";

const CountryInfo = (country) => {

    console.log(country)

    if (country.country === "none") {
        return (
            <div id="country_content">
                <h1>ICI</h1>
                <p>Veuillez selectionez le pays qui vous interesse.</p>
            </div>
        );
    } else if (country.country === "FR") {
        return (
        <div id="country_content">
            <h1>La france 🇫🇷</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec odio semper, consequat elit et, porta lorem. Nullam egestas lobortis diam. Suspendisse condimentum dui non nisi egestas eleifend. Donec id fermentum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet urna nisi. Mauris ultricies malesuada euismod. Nullam et euismod nisi. Phasellus cursus augue magna, non tristique diam consequat sit amet. Mauris varius at est vitae ullamcorper. Nullam imperdiet mauris dignissim nisl imperdiet, eget lobortis nunc scelerisque. Duis efficitur ipsum et blandit gravida. Nulla elementum facilisis mauris, sit amet blandit ex sodales id. Ut tempor enim ut nisi ultrices suscipit. Vivamus quam lorem, condimentum in mi consectetur, malesuada fringilla orci.

                Donec feugiat tincidunt lacus. Aliquam semper justo nec facilisis vulputate. Donec laoreet dolor arcu, non iaculis lorem sagittis sit amet. Vivamus rhoncus egestas justo quis accumsan. Nulla tempus, erat a fringilla dictum, est quam tristique odio, nec pellentesque massa est a ligula. Curabitur mollis mi et tortor auctor, et feugiat ex gravida. Ut mi nulla, feugiat vel sodales id, aliquet a tortor. Integer nisi ipsum, laoreet vel eleifend sed, efficitur quis tortor. Nulla congue felis non nisi vestibulum, et molestie ex efficitur. Praesent a sodales nunc.

                Praesent nec sem odio. Vestibulum consectetur urna in nunc sagittis, vel consequat turpis mattis. Maecenas at mi vitae mi lacinia feugiat. Praesent interdum pulvinar molestie. Sed faucibus gravida lorem, a aliquam erat aliquet et. Etiam dapibus cursus venenatis. Vivamus ac dignissim ligula. Aliquam erat volutpat. Donec vehicula libero ullamcorper tellus imperdiet, id tempor velit facilisis. Aenean pulvinar, tortor ac malesuada vehicula, metus eros feugiat ipsum, in sodales nisi leo in dolor. Fusce quis elementum velit. Ut facilisis pharetra nibh, nec condimentum mauris feugiat et.

                Curabitur sed metus et sem sodales egestas. Fusce ut sagittis enim. In hac habitasse platea dictumst. Aliquam erat volutpat. Nulla ac felis tellus. Vivamus in iaculis nisl. Aliquam erat volutpat. Donec augue enim, fermentum vel placerat in, vehicula eu est. Pellentesque vulputate ante id porta rhoncus. Nullam non ante sem.

                Mauris eget pellentesque tellus. Etiam ut mauris tempus, rutrum elit non, luctus magna. Nulla facilisi. Sed eget viverra nulla. Integer eget viverra massa. Nunc luctus sed leo a malesuada. Fusce molestie, neque quis congue mattis, sapien nisi tincidunt ipsum, ac accumsan velit lacus et sapien. Nullam eu ante et neque posuere lobortis. Nunc nisl dolor, mattis ut mi quis, pharetra facilisis ligula. Vestibulum volutpat, lectus quis malesuada pharetra, mauris velit pharetra turpis, ac tincidunt orci quam a purus. Maecenas mollis ac tortor at dapibus. Nam mauris sem, laoreet sit amet pulvinar id, euismod at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
        </div>
        );
    } else {
        return (
            <div id="country_content">
                <h1>ICI</h1>
                <p>{country.country}</p>
            </div>
        );
    }


};
export default CountryInfo;