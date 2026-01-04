//#region Glow Neighbouring Stars
// Maybe I should do like
// If you have been seen. Start glowing. Maybe shove it into a "glowingStars" array.
// Like constellations[c].glowing[i].
// And then I've got a for loop where all stars in c.glowing which are NOT completed, glow.


// If currentStar is NOT each to this star, and this star is NOT completed,
// and it HAS been a neighbouringStar (isVisible)
// Then it should glow

function neighbouringStarsGlow() {
    updateNeighbours();
    // For every neighbouringStar
    for (let i = 0; i < neighbouringStars.length; i++) {
        let neighbouringStarV = ("v" + neighbouringStars[i][2])
        // If constellation is not complete (putting this here reduces flicker)
        // and if the neighbouringStar isn't fully connected
        if (constellations[currentConstellation].completed == 0 &&
            constellations[currentConstellation][neighbouringStarV][5] !== 1) {
            // push it into the "glowingArray" array.
            // Prevents duplicates
            if (constellations[currentConstellation].glowArray.indexOf(constellations[currentConstellation][neighbouringStarV]) === -1)
                constellations[currentConstellation].glowArray.push(constellations[currentConstellation][neighbouringStarV]);
        }
    }

    makeThingsGlow()
}
let diameter;

function makeThingsGlow() {
    // For each star in the constellation's glowArray
    for (let i = 0; i < constellations[currentConstellation].glowArray.length; i++) {
        // If it is not complete & currentStar is not equal to the glow star
        // and if it a neighbouring star?
        if (constellations[currentConstellation].glowArray[i][5] !== 1 && currentStar !== constellations[currentConstellation].glowArray[i][2]) {
            // Make it glow
            diameter = ((sin(millis() * 0.002) + 3) * 8);
            noStroke();
            fill("hsla(270, 65%, 78%, 0.7)");
            blendMode(OVERLAY);
            ellipse(constellations[currentConstellation].glowArray[i][0], constellations[currentConstellation].glowArray[i][1], diameter, diameter);
            ellipse(constellations[currentConstellation].glowArray[i][0], constellations[currentConstellation].glowArray[i][1], diameter, diameter);
            blendMode(BLEND);
        }
        
    }
    neighbouringStars.forEach(glowDirectNeighboursBrighter);   
}

function glowDirectNeighboursBrighter(index) {
    let starV = "v" + index[2];
    if (constellations[currentConstellation][starV][5] == 0) {
        fill("hsla(293, 100%, 75%, 0.68)");
        blendMode(LIGHTEST);
        ellipse(index[0], index[1], diameter / 1.5, diameter / 1.5);
        ellipse(index[0], index[1], diameter / 2, diameter / 2);
        blendMode(BLEND);
    }
}

function neighbouringStarsGlowOld() {
    for (let i = 0; i < neighbouringStars.length; i++) {
        // If it is a neighbouring star, glow
        // IF it is NOT complete.
        if (constellations[currentConstellation].completed == 0) {
            currentStarV = ("v" + currentStar);
            if (constellations[currentConstellation][currentStarV][5] !== 1) {
                noStroke();
                fill("hsla(270, 39%, 76%, 1.00)");
                let diameter = ((sin(millis() * 0.002) + 3) * 10) + 6;
                blendMode(OVERLAY);
                ellipse(neighbouringStars[i][0], neighbouringStars[i][1], diameter, diameter);
                ellipse(neighbouringStars[i][0], neighbouringStars[i][1], diameter, diameter);
                blendMode(BLEND);
            }
        }
    }
}

function updateNeighbours() {
    // For all the neighbouring stars
    for (let i = 0; i < neighbouringStars.length; i++) {
        // Check whether the star is complete or not (by seeing which lines are drawn)
        switch (currentConstellation) {
            case 1: // Aries -- Double-Checked
                switch (previousStar) {
                    case 1:
                        if (constellations[currentConstellation].line[0] == 1) {
                            constellations[currentConstellation].v1[5] = 1;

                        }
                        break;
                    case 2:
                        if (constellations[currentConstellation].line[0] == 1 && constellations[currentConstellation].line[1] == 1) {
                            constellations[currentConstellation].v2[5] = 1;
                        }
                        break;
                    case 3:
                        if (constellations[currentConstellation].line[1] == 1 && constellations[currentConstellation].line[2] == 1) {
                            constellations[currentConstellation].v3[5] = 1;
                        }
                        break;
                    case 4:
                        if (constellations[currentConstellation].line[2] == 1) {
                            constellations[currentConstellation].v4[5] = 1;
                        }
                        break;
                }
                break;

            case 2: // Taurus -- Done
                switch (previousStar) {
                    case 1:
                        if (constellations[currentConstellation].line[0] == 1) {
                            constellations[currentConstellation].v1[5] = 1;
                        }
                        break;
                    case 2:
                        if (constellations[currentConstellation].line[0] == 1 && constellations[currentConstellation].line[1] == 1) {
                            constellations[currentConstellation].v2[5] = 1;
                        }
                        break;
                    case 3:
                        if (constellations[currentConstellation].line[1] == 1 && constellations[currentConstellation].line[2] == 1
                            && constellations[currentConstellation].line[5] == 1
                        ) {
                            constellations[currentConstellation].v3[5] = 1;
                        }
                        break;
                    case 4:
                        if (constellations[currentConstellation].line[2] == 1 && constellations[currentConstellation].line[3] == 1) {
                            constellations[currentConstellation].v4[5] = 1;
                        }
                        break;
                    case 5:
                        if (constellations[currentConstellation].line[3] == 1 && constellations[currentConstellation].line[4] == 1
                            && constellations[currentConstellation].line[11] == 1
                        ) {
                            constellations[currentConstellation].v5[5] = 1;
                        }
                        break;
                    case 6:
                        if (constellations[currentConstellation].line[4] == 1) {
                            constellations[currentConstellation].v6[5] = 1
                        }
                        break;
                    case 7:
                        if (constellations[currentConstellation].line[8] == 1 && constellations[currentConstellation].line[9] == 1
                            && constellations[currentConstellation].line[11] == 1
                        ) {
                            constellations[currentConstellation].v7[5] = 1;
                        }
                        break;
                    case 8:
                        if (constellations[currentConstellation].line[9] == 1 && constellations[currentConstellation].line[10] == 1) {
                            constellations[currentConstellation].v8[5] = 1;
                        }
                        break;
                    case 9:
                        if (constellations[currentConstellation].line[10] == 1) {
                            constellations[currentConstellation].v9[5] = 1;
                        }
                        break;
                    case 10:
                        if (constellations[currentConstellation].line[6] == 1) {
                            constellations[currentConstellation].v10[5] = 1;
                        }
                        break;
                    case 11:
                        if (constellations[currentConstellation].line[7] == 1 && constellations[currentConstellation].line[8] == 1) {
                            constellations[currentConstellation].v11[5] = 1;
                        }
                        break;
                    case 12:
                        if (constellations[currentConstellation].line[5] == 1 && constellations[currentConstellation].line[6] == 1
                            && constellations[currentConstellation].line[7] == 1
                        ) {
                            constellations[currentConstellation].v12[5] = 1;
                        }
                        break;
                }
                break;

            case 3: // Gemini -- Done
                switch (previousStar) {
                    case 1:
                        if (constellations[currentConstellation].line[0] == 1) {
                            constellations[currentConstellation].v1[5] = 1;
                        }
                        break;
                    case 2:
                        if (constellations[currentConstellation].line[0] == 1 && constellations[currentConstellation].line[1] == 1) {
                            constellations[currentConstellation].v2[5] = 1;
                        }
                        break;
                    case 3:
                        if (constellations[currentConstellation].line[1] == 1 && constellations[currentConstellation].line[2] == 1) {
                            constellations[currentConstellation].v3[5] = 1;
                        }
                        break;
                    case 4:
                        if (constellations[currentConstellation].line[2] == 1 && constellations[currentConstellation].line[3] == 1
                            && constellations[currentConstellation].line[4] == 1
                        ) {
                            constellations[currentConstellation].v4[5] = 1;
                        }
                        break;
                    case 5:
                        if (constellations[currentConstellation].line[3] == 1) {
                            constellations[currentConstellation].v5[5] = 1;
                        }
                        break;
                    case 6:
                        if (constellations[currentConstellation].line[4] == 1 && constellations[currentConstellation].line[5] == 1
                            && constellations[currentConstellation].line[6] == 1 && constellations[currentConstellation].line[7] == 1
                        ) {
                            constellations[currentConstellation].v6[5] = 1
                        }
                        break;
                    case 7:
                        if (constellations[currentConstellation].line[5] == 1) {
                            constellations[currentConstellation].v7[5] = 1;
                        }
                        break;
                    case 8:
                        if (constellations[currentConstellation].line[6] == 1) {
                            constellations[currentConstellation].v8[5] = 1;
                        }
                        break;
                    case 9:
                        if (constellations[currentConstellation].line[7] == 1 && constellations[currentConstellation].line[8] == 1) {
                            constellations[currentConstellation].v9[5] = 1;
                        }
                        break;
                    case 10:
                        if (constellations[currentConstellation].line[9] == 1) {
                            constellations[currentConstellation].v10[5] = 1;
                        }
                        break;
                    case 11:
                        if (constellations[currentConstellation].line[8] == 1 && constellations[currentConstellation].line[9] == 1
                            && constellations[currentConstellation].line[10] == 1 && constellations[currentConstellation].line[11] == 1
                        ) {
                            constellations[currentConstellation].v11[5] = 1;
                        }
                        break;
                    case 12:
                        if (constellations[currentConstellation].line[10] == 1) {
                            constellations[currentConstellation].v12[5] = 1;
                        }
                        break;
                    case 13:
                        if (constellations[currentConstellation].line[11] == 1 && constellations[currentConstellation].line[12] == 1
                            && constellations[currentConstellation].line[13] == 1
                        ) {
                            constellations[currentConstellation].v13[5] = 1;
                        }
                        break;
                    case 14:
                        if (constellations[currentConstellation].line[12] == 1 && constellations[currentConstellation].line[14] == 1) {
                            constellations[currentConstellation].v14[5] = 1;
                        }
                        break;
                    case 15:
                        if (constellations[currentConstellation].line[13] == 1 && constellations[currentConstellation].line[15] == 1) {
                            constellations[currentConstellation].v15[5] = 1;
                        }
                        break;
                    case 16:
                        if (constellations[currentConstellation].line[15] == 1) {
                            constellations[currentConstellation].v16[5] = 1;
                        }
                        break;
                    case 17:
                        if (constellations[currentConstellation].line[14] == 1) {
                            constellations[currentConstellation].v17[5] = 1;
                        }
                        break;
                }
                break;

            case 4: // Cancer -- Done
                switch (previousStar) {
                    case 1:
                        if (constellations[currentConstellation].line[0] == 1) {
                            constellations[currentConstellation].v1[5] = 1;

                        }
                        break;
                    case 2:
                        if (constellations[currentConstellation].line[1] == 1) {
                            constellations[currentConstellation].v2[5] = 1;
                        }
                        break;
                    case 3:
                        if (constellations[currentConstellation].line[0] == 1 && constellations[currentConstellation].line[1] == 1
                            && constellations[currentConstellation].line[2] == 1
                        ) {
                            constellations[currentConstellation].v3[5] = 1;
                        }
                        break;
                    case 4:
                        if (constellations[currentConstellation].line[2] == 1 && constellations[currentConstellation].line[3] == 1
                            && constellations[currentConstellation].line[4] == 1
                        ) {
                            constellations[currentConstellation].v4[5] = 1;
                        }
                        break;
                    case 5:
                        if (constellations[currentConstellation].line[3] == 1) {
                            constellations[currentConstellation].v5[5] = 1;
                        }
                        break;
                    case 5:
                        if (constellations[currentConstellation].line[4] == 1) {
                            constellations[currentConstellation].v5[5] = 1;
                        }
                        break;
                }
                break;

            case 5: // Leo -- Double-checked
                switch (previousStar) {
                    case 1:
                        if (constellations[currentConstellation].line[0] == 1) {
                            constellations[currentConstellation].v1[5] = 1;
                        }
                        break;
                    case 2:
                        if (constellations[currentConstellation].line[0] == 1 && constellations[currentConstellation].line[1] == 1) {
                            constellations[currentConstellation].v2[5] = 1;
                        }
                        break;
                    case 3:
                        if (constellations[currentConstellation].line[1] == 1 && constellations[currentConstellation].line[2] == 1) {
                            constellations[currentConstellation].v3[5] = 1;
                        }
                        break;
                    case 4:
                        if (constellations[currentConstellation].line[2] == 1 && constellations[currentConstellation].line[3] == 1
                            && constellations[currentConstellation].line[5] == 1
                        ) {
                            constellations[currentConstellation].v4[5] = 1;
                        }
                        break;
                    case 5:
                        if (constellations[currentConstellation].line[3] == 1 && constellations[currentConstellation].line[4] == 1) {
                            constellations[currentConstellation].v5[5] = 1;
                        }
                        break;
                    case 6:
                        if (constellations[currentConstellation].line[4] == 1 && constellations[currentConstellation].line[6] == 1) {
                            constellations[currentConstellation].v6[5] = 1
                        }
                        break;
                    case 7:
                        if (constellations[currentConstellation].line[5] == 1 && constellations[currentConstellation].line[7] == 1
                            && constellations[currentConstellation].line[8] == 1
                        ) {
                            constellations[currentConstellation].v7[5] = 1;
                        }
                        break;
                    case 8:
                        if (constellations[currentConstellation].line[6] == 1 && constellations[currentConstellation].line[7] == 1
                            && constellations[currentConstellation].line[9] == 1
                        ) {
                            constellations[currentConstellation].v8[5] = 1;
                        }
                        break;
                    case 9:
                        if (constellations[currentConstellation].line[8] == 1 && constellations[currentConstellation].line[9] == 1) {
                            constellations[currentConstellation].v9[5] = 1;
                        }
                        break;
                }
                break;

            case 6: // Virgo -- Done
                switch (previousStar) {
                    case 1:
                        if (constellations[currentConstellation].line[0] == 1) {
                            constellations[currentConstellation].v1[5] = 1;

                        }
                        break;
                    case 2:
                        if (constellations[currentConstellation].line[0] == 1 && constellations[currentConstellation].line[1] == 1) {
                            constellations[currentConstellation].v2[5] = 1;
                        }
                        break;
                    case 3:
                        if (constellations[currentConstellation].line[1] == 1 && constellations[currentConstellation].line[2] == 1
                            && constellations[currentConstellation].line[3] == 1
                        ) {
                            constellations[currentConstellation].v3[5] = 1;
                        }
                        break;
                    case 4:
                        if (constellations[currentConstellation].line[2] == 1 && constellations[currentConstellation].line[4] == 1
                            && constellations[currentConstellation].line[5] == 1
                        ) {
                            constellations[currentConstellation].v4[5] = 1;
                        }
                        break;
                    case 5:
                        if (constellations[currentConstellation].line[4] == 1) {
                            constellations[currentConstellation].v5[5] = 1;
                        }
                        break;
                    case 6:
                        if (constellations[currentConstellation].line[5] == 1 && constellations[currentConstellation].line[6] == 1
                            && constellations[currentConstellation].line[7] == 1) {
                            constellations[currentConstellation].v6[5] = 1
                        }
                        break;
                    case 7:
                        if (constellations[currentConstellation].line[7] == 1 && constellations[currentConstellation].line[8] == 1) {
                            constellations[currentConstellation].v7[5] = 1;
                        }
                        break;
                    case 8:
                        if (constellations[currentConstellation].line[8] == 1) {
                            constellations[currentConstellation].v8[5] = 1;
                        }
                        break;
                    case 9:
                        if (constellations[currentConstellation].line[3] == 1 && constellations[currentConstellation].line[6] == 1
                            && constellations[currentConstellation].line[9] == 1
                        ) {
                            constellations[currentConstellation].v9[5] = 1;
                        }
                        break;
                    case 10:
                        if (constellations[currentConstellation].line[9] == 1 && constellations[currentConstellation].line[10] == 1) {
                            constellations[currentConstellation].v10[5] = 1;
                        }
                        break;
                    case 11:
                        if (constellations[currentConstellation].line[10] == 1 && constellations[currentConstellation].line[11] == 1) {
                            constellations[currentConstellation].v11[5] = 1;
                        }
                        break;
                    case 12:
                        if (constellations[currentConstellation].line[11] == 1) {
                            constellations[currentConstellation].v12[5] = 1;
                        }
                        break;
                }
                break;

            case 7: // Libra -- Done
                switch (previousStar) {
                    case 1:
                        if (constellations[currentConstellation].line[0] == 1 && constellations[currentConstellation].line[1] == 1) {
                            constellations[currentConstellation].v1[5] = 1;

                        }
                        break;
                    case 2:
                        if (constellations[currentConstellation].line[0] == 1 && constellations[currentConstellation].line[2] == 1) {
                            constellations[currentConstellation].v2[5] = 1;
                        }
                        break;
                    case 3:
                        if (constellations[currentConstellation].line[2] == 1 && constellations[currentConstellation].line[3] == 1
                            && constellations[currentConstellation].line[4] == 1
                        ) {
                            constellations[currentConstellation].v3[5] = 1;
                        }
                        break;
                    case 4:
                        if (constellations[currentConstellation].line[3] == 1) {
                            constellations[currentConstellation].v4[5] = 1;
                        }
                        break;
                    case 5:
                        if (constellations[currentConstellation].line[1] == 1 && constellations[currentConstellation].line[4] == 1) {
                            constellations[currentConstellation].v5[5] = 1;
                        }
                        break;
                }
                break;

            case 8: // Scorpius -- Done
                switch (previousStar) {
                    case 1:
                        if (constellations[currentConstellation].line[0] == 1) {
                            constellations[currentConstellation].v1[5] = 1;
                        }
                        break;
                    case 2:
                        if (constellations[currentConstellation].line[1] == 1) {
                            constellations[currentConstellation].v2[5] = 1;
                        }
                        break;
                    case 3:
                        if (constellations[currentConstellation].line[2] == 1) {
                            constellations[currentConstellation].v3[5] = 1;
                        }
                        break;
                    case 4:
                        if (constellations[currentConstellation].line[0] == 1 && constellations[currentConstellation].line[1] == 1
                            && constellations[currentConstellation].line[2] == 1 && constellations[currentConstellation].line[3] == 1) {
                            constellations[currentConstellation].v4[5] = 1;
                        }
                        break;
                    case 5:
                        if (constellations[currentConstellation].line[3] == 1 && constellations[currentConstellation].line[4] == 1) {
                            constellations[currentConstellation].v5[5] = 1;
                        }
                        break;
                    case 6:
                        if (constellations[currentConstellation].line[4] == 1 && constellations[currentConstellation].line[5] == 1) {
                            constellations[currentConstellation].v6[5] = 1
                        }
                        break;
                    case 7:
                        if (constellations[currentConstellation].line[5] == 1 && constellations[currentConstellation].line[6] == 1) {
                            constellations[currentConstellation].v7[5] = 1;
                        }
                        break;
                    case 8:
                        if (constellations[currentConstellation].line[6] == 1 && constellations[currentConstellation].line[7] == 1) {
                            constellations[currentConstellation].v8[5] = 1;
                        }
                        break;
                    case 9:
                        if (constellations[currentConstellation].line[7] == 1 && constellations[currentConstellation].line[8] == 1) {
                            constellations[currentConstellation].v9[5] = 1;
                        }
                        break;
                    case 10:
                        if (constellations[currentConstellation].line[8] == 1 && constellations[currentConstellation].line[9] == 1) {
                            constellations[currentConstellation].v10[5] = 1;
                        }
                        break;
                    case 11:
                        if (constellations[currentConstellation].line[9] == 1 && constellations[currentConstellation].line[10] == 1) {
                            constellations[currentConstellation].v11[5] = 1;
                        }
                        break;
                    case 12:
                        if (constellations[currentConstellation].line[10] == 1 && constellations[currentConstellation].line[11] == 1) {
                            constellations[currentConstellation].v12[5] = 1;
                        }
                        break;
                    case 13:
                        if (constellations[currentConstellation].line[11] == 1) {
                            constellations[currentConstellation].v13[5] = 1;
                        }
                        break;
                }
                break;

            case 9: // Sagittarius
                switch (previousStar) {
                    case 1:
                        if (constellations[currentConstellation].line[0] == 1) {
                            constellations[currentConstellation].v1[5] = 1;
                        }
                        break;
                    case 2:
                        if (constellations[currentConstellation].line[1] == 1) {
                            constellations[currentConstellation].v2[5] = 1;
                        }
                        break;
                    case 3:
                        if (constellations[currentConstellation].line[0] == 1 && constellations[currentConstellation].line[3] == 1
                            && constellations[currentConstellation].line[8] == 1
                        ) {
                            constellations[currentConstellation].v3[5] = 1;
                        }
                        break;
                    case 4:
                        if (constellations[currentConstellation].line[1] == 1 && constellations[currentConstellation].line[2] == 1
                            && constellations[currentConstellation].line[4] == 1
                        ) {
                            constellations[currentConstellation].v4[5] = 1;
                        }
                        break;
                    case 5:
                        if (constellations[currentConstellation].line[2] == 1 && constellations[currentConstellation].line[3] == 1
                            && constellations[currentConstellation].line[4] == 1 && constellations[currentConstellation].line[7] == 1
                        ) {
                            constellations[currentConstellation].v5[5] = 1;
                        }
                        break;
                    case 6:
                        if (constellations[currentConstellation].line[4] == 1 && constellations[currentConstellation].line[5] == 1
                            && constellations[currentConstellation].line[6] == 1 && constellations[currentConstellation].line[11] == 1
                        ) {
                            constellations[currentConstellation].v6[5] = 1
                        }
                        break;
                    case 7:
                        if (constellations[currentConstellation].line[6] == 1) {
                            constellations[currentConstellation].v7[5] = 1;
                        }
                        break;
                    case 8:
                        if (constellations[currentConstellation].line[10] == 1 && constellations[currentConstellation].line[11] == 1
                            && constellations[currentConstellation].line[12] == 1
                        ) {
                            constellations[currentConstellation].v8[5] = 1;
                        }
                        break;
                    case 9:
                        if (constellations[currentConstellation].line[7] && constellations[currentConstellation].line[8] == 1
                            && constellations[currentConstellation].line[9] == 1 && constellations[currentConstellation].line[10] == 1
                        ) {
                            constellations[currentConstellation].v9[5] = 1;
                        }
                        break;
                    case 10:
                        if (constellations[currentConstellation].line[9] == 1 && constellations[currentConstellation].line[13] == 1
                            && constellations[currentConstellation].line[15] == 1
                        ) {
                            constellations[currentConstellation].v10[5] = 1;
                        }
                        break;
                    case 11:
                        if (constellations[currentConstellation].line[15] == 1 && constellations[currentConstellation].line[16] == 1) {
                            constellations[currentConstellation].v11[5] = 1;
                        }
                        break;
                    case 12:
                        if (constellations[currentConstellation].line[16] == 1 && constellations[currentConstellation].line[17] == 1) {
                            constellations[currentConstellation].v12[5] = 1;
                        }
                        break;
                    case 13:
                        if (constellations[currentConstellation].line[17] == 1 && constellations[currentConstellation].line[18] == 1) {
                            constellations[currentConstellation].v13[5] = 1;
                        }
                        break;
                    case 14:
                        if (constellations[currentConstellation].line[18] == 1) {
                            constellations[currentConstellation].v14[5] = 1;
                        }
                        break;
                    case 15:
                        if (constellations[currentConstellation].line[12] == 1 && constellations[currentConstellation].line[13] == 1
                            && constellations[currentConstellation].line[14] == 1
                        ) {
                            constellations[currentConstellation].v15[5] = 1;
                        }
                        break;
                    case 16:
                        if (constellations[currentConstellation].line[14] == 1 && constellations[currentConstellation].line[19] == 1) {
                            constellations[currentConstellation].v16[5] = 1;
                        }
                        break;
                    case 17:
                        if (constellations[currentConstellation].line[19] == 1 && constellations[currentConstellation].line[20] == 1) {
                            constellations[currentConstellation].v17[5] = 1;
                        }
                        break;
                    case 18:
                        if (constellations[currentConstellation].line[20] == 1 && constellations[currentConstellation].line[21] == 1) {
                            constellations[currentConstellation].v18[5] = 1;
                        }
                        break;
                    case 19:
                        if (constellations[currentConstellation].line[21] == 1 && constellations[currentConstellation].line[22] == 1
                            && constellations[currentConstellation].line[23] == 1
                        ) {
                            constellations[currentConstellation].v19[5] = 1;
                        }
                        break;
                    case 20:
                        if (constellations[currentConstellation].line[22] == 1) {
                            constellations[currentConstellation].v20[5] = 1;
                        }
                        break;
                    case 21:
                        if (constellations[currentConstellation].line[23] == 1) {
                            constellations[currentConstellation].v21[5] = 1;
                        }
                        break;
                }
                break;

            case 10: // Capricornus -- Done
                switch (previousStar) {
                    case 1:
                        if (constellations[currentConstellation].line[0] == 1) {
                            constellations[currentConstellation].v1[5] = 1;
                        }
                        break;
                    case 2:
                        if (constellations[currentConstellation].line[0] == 1 && constellations[currentConstellation].line[2] == 1) {
                            constellations[currentConstellation].v2[5] = 1;
                        }
                        break;
                    case 3:
                        if (constellations[currentConstellation].line[1] == 1) {
                            constellations[currentConstellation].v3[5] = 1;
                        }
                        break;
                    case 4:
                        if (constellations[currentConstellation].line[2] == 1 && constellations[currentConstellation].line[3] == 1
                            && constellations[currentConstellation].line[4] == 1 && constellations[currentConstellation].line[5] == 1
                        ) {
                            constellations[currentConstellation].v4[5] = 1;
                        }
                        break;
                    case 5:
                        if (constellations[currentConstellation].line[3] == 1) {
                            constellations[currentConstellation].v5[5] = 1;
                        }
                        break;
                    case 6:
                        if (constellations[currentConstellation].line[4] == 1 && constellations[currentConstellation].line[6] == 1) {
                            constellations[currentConstellation].v6[5] = 1
                        }
                        break;
                    case 7:
                        if (constellations[currentConstellation].line[5] == 1 && constellations[currentConstellation].line[6] == 1
                            && constellations[currentConstellation].line[7] == 1
                        ) {
                            constellations[currentConstellation].v7[5] = 1;
                        }
                        break;
                    case 8:
                        if (constellations[currentConstellation].line[7] == 1 && constellations[currentConstellation].line[8] == 1) {
                            constellations[currentConstellation].v8[5] = 1;
                        }
                        break;
                    case 9:
                        if (constellations[currentConstellation].line[8]) {
                            constellations[currentConstellation].v9[5] = 1;
                        }
                        break;
                }
                break;

            case 11: // Aquarius -- Done
                switch (previousStar) {
                    case 1:
                        if (constellations[currentConstellation].line[0] == 1) {
                            constellations[currentConstellation].v1[5] = 1;
                        }
                        break;
                    case 2:
                        if (constellations[currentConstellation].line[0] == 1 && constellations[currentConstellation].line[1] == 1) {
                            constellations[currentConstellation].v2[5] = 1;
                        }
                        break;
                    case 3:
                        if (constellations[currentConstellation].line[1] == 1 && constellations[currentConstellation].line[2] == 1) {
                            constellations[currentConstellation].v3[5] = 1;
                        }
                        break;
                    case 4:
                        if (constellations[currentConstellation].line[2] == 1 && constellations[currentConstellation].line[3] == 1
                            && constellations[currentConstellation].line[4] == 1
                        ) {
                            constellations[currentConstellation].v4[5] = 1;
                        }
                        break;
                    case 5:
                        if (constellations[currentConstellation].line[3] == 1 && constellations[currentConstellation].line[5] == 1
                            && constellations[currentConstellation].line[6] == 1
                        ) {
                            constellations[currentConstellation].v5[5] = 1;
                        }
                        break;
                    case 6:
                        if (constellations[currentConstellation].line[5] == 1) {
                            constellations[currentConstellation].v6[5] = 1
                        }
                        break;
                    case 7:
                        if (constellations[currentConstellation].line[6] == 1 && constellations[currentConstellation].line[7] == 1) {
                            constellations[currentConstellation].v7[5] = 1;
                        }
                        break;
                    case 8:
                        if (constellations[currentConstellation].line[7] == 1 && constellations[currentConstellation].line[8] == 1) {
                            constellations[currentConstellation].v8[5] = 1;
                        }
                        break;
                    case 9:
                        if (constellations[currentConstellation].line[8] && constellations[currentConstellation].line[9] == 1) {
                            constellations[currentConstellation].v9[5] = 1;
                        }
                        break;
                    case 10:
                        if (constellations[currentConstellation].line[9] == 1) {
                            constellations[currentConstellation].v10[5] = 1;
                        }
                        break;
                    case 11:
                        if (constellations[currentConstellation].line[10] == 1 && constellations[currentConstellation].line[4] == 1) {
                            constellations[currentConstellation].v11[5] = 1;
                        }
                        break;
                    case 12:
                        if (constellations[currentConstellation].line[10] == 1 && constellations[currentConstellation].line[11] == 1) {
                            constellations[currentConstellation].v12[5] = 1;
                        }
                        break;
                    case 13:
                        if (constellations[currentConstellation].line[11] == 1 && constellations[currentConstellation].line[12] == 1) {
                            constellations[currentConstellation].v13[5] = 1;
                        }
                        break;
                    case 14:
                        if (constellations[currentConstellation].line[12] == 1 && constellations[currentConstellation].line[13] == 1) {
                            constellations[currentConstellation].v14[5] = 1;
                        }
                        break;
                    case 15:
                        if (constellations[currentConstellation].line[13] == 1 && constellations[currentConstellation].line[14] == 1) {
                            constellations[currentConstellation].v15[5] = 1;
                        }
                        break;
                    case 16:
                        if (constellations[currentConstellation].line[14] == 1) {
                            constellations[currentConstellation].v16[5] = 1;
                        }
                        break;
                }
                break;

            case 12: // Pisces -- Done
                switch (previousStar) {
                    case 1:
                        if (constellations[currentConstellation].line[0] == 1 && constellations[currentConstellation].line[1] == 1) {
                            constellations[currentConstellation].v1[5] = 1;
                        }
                        break;
                    case 2:
                        if (constellations[currentConstellation].line[0] == 1 && constellations[currentConstellation].line[2] == 1) {
                            constellations[currentConstellation].v2[5] = 1;
                        }
                        break;
                    case 3:
                        if (constellations[currentConstellation].line[2] == 1 && constellations[currentConstellation].line[3] == 1) {
                            constellations[currentConstellation].v3[5] = 1;
                        }
                        break;
                    case 4:
                        if (constellations[currentConstellation].line[3] == 1 && constellations[currentConstellation].line[4] == 1
                            && constellations[currentConstellation].line[5] == 1
                        ) {
                            constellations[currentConstellation].v4[5] = 1;
                        }
                        break;
                    case 5:
                        if (constellations[currentConstellation].line[1] == 1 && constellations[currentConstellation].line[4] == 1) {
                            constellations[currentConstellation].v5[5] = 1;
                        }
                        break;
                    case 6:
                        if (constellations[currentConstellation].line[5] == 1 && constellations[currentConstellation].line[6] == 1) {
                            constellations[currentConstellation].v6[5] = 1
                        }
                        break;
                    case 7:
                        if (constellations[currentConstellation].line[6] == 1 && constellations[currentConstellation].line[7] == 1) {
                            constellations[currentConstellation].v7[5] = 1;
                        }
                        break;
                    case 8:
                        if (constellations[currentConstellation].line[7] == 1 && constellations[currentConstellation].line[8] == 1) {
                            constellations[currentConstellation].v8[5] = 1;
                        }
                        break;
                    case 9:
                        if (constellations[currentConstellation].line[8] == 1 && constellations[currentConstellation].line[9] == 1) {
                            constellations[currentConstellation].v9[5] = 1;
                        }
                        break;
                    case 10:
                        if (constellations[currentConstellation].line[9] == 1 && constellations[currentConstellation].line[10] == 1) {
                            constellations[currentConstellation].v10[5] = 1;
                        }
                        break;
                    case 11:
                        if (constellations[currentConstellation].line[10] == 1 && constellations[currentConstellation].line[11] == 1) {
                            constellations[currentConstellation].v11[5] = 1;
                        }
                        break;
                    case 12:
                        if (constellations[currentConstellation].line[11] == 1 && constellations[currentConstellation].line[12] == 1
                            && constellations[currentConstellation].line[8] == 1
                        ) {
                            constellations[currentConstellation].v12[5] = 1;
                        }
                        break;
                    case 13:
                        if (constellations[currentConstellation].line[12] == 1 && constellations[currentConstellation].line[13] == 1
                            && constellations[currentConstellation].line[11] == 1
                        ) {
                            constellations[currentConstellation].v13[5] = 1;
                        }
                        break;
                    case 14:
                        if (constellations[currentConstellation].line[13] == 1 && constellations[currentConstellation].line[14] == 1) {
                            constellations[currentConstellation].v14[5] = 1;
                        }
                        break;
                    case 15:
                        if (constellations[currentConstellation].line[14] == 1 && constellations[currentConstellation].line[15] == 1) {
                            constellations[currentConstellation].v15[5] = 1;
                        }
                        break;
                    case 16:
                        if (constellations[currentConstellation].line[15] == 1 && constellations[currentConstellation].line[16] == 1
                            && constellations[currentConstellation].line[17] == 1
                        ) {
                            constellations[currentConstellation].v16[5] = 1;
                        }
                        break;
                    case 17:
                        if (constellations[currentConstellation].line[16] == 1 && constellations[currentConstellation].line[18] == 1) {
                            constellations[currentConstellation].v17[5] = 1;
                        }
                        break;
                    case 18:
                        if (constellations[currentConstellation].line[17] == 1 && constellations[currentConstellation].line[18] == 1) {
                            constellations[currentConstellation].v18[5] = 1;
                        }
                        break;
                }
        }
        break;
    }
}

function updateNeighboursOld() {
    // For all the current constellation's stars
    for (let i = 0; i < constellations[currentConstellation].size; i++) {
        // Check whether the star is complete or not
        // switch (currentConstellation) {
        //case 5:
        if (constellations[currentConstellation].line[0] == 1 && constellations[currentConstellation].line[1] == 1) {
            constellations[currentConstellation].v1[5] = 1;
        }
        //break;
        //}
    }
}
//#endregion