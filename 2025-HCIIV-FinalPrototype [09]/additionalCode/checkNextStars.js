function checkNextStars(currentConstellation) {
	switch (currentConstellation) { // Check which constellation we are currently drawing

		case 1: // 0 = Aries
			switch (currentStar) { // Check which star we are on, and
				// determines neighbouring stars based on currentStar
				case 1:
					neighbouringStars = [Aries.v2]
					break;
				case 2:
					neighbouringStars = [Aries.v1, Aries.v3]
					break;
				case 3:
					neighbouringStars = [Aries.v2, Aries.v4]
					break;
				case 4:
					neighbouringStars = [Aries.v3]
					break;
			}

			// Sends drawn lines to line array so that system knows when all lines have been drawn
			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 4 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 4)) {
				constellations[currentConstellation].line[2] = 1;
			}
			break;

		case 2: // 1 = Taurus
			switch (currentStar) { // Check which star we are on, and
				// determines neighbouring stars based on currentStar
				case 1:
					neighbouringStars = [Taurus.v2];
					break;
				case 2:
					neighbouringStars = [Taurus.v1, Taurus.v3];
					break;
				case 3:
					neighbouringStars = [Taurus.v2, Taurus.v4, Taurus.v12];
					break;
				case 4:
					neighbouringStars = [Taurus.v3, Taurus.v5];
					break;
				case 5:
					neighbouringStars = [Taurus.v4, Taurus.v6, Taurus.v7];
					break;
				case 6:
					neighbouringStars = [Taurus.v5];
					break;
				case 7:
					neighbouringStars = [Taurus.v5, Taurus.v8, Taurus.v11,];
					break;
				case 8:
					neighbouringStars = [Taurus.v7, Taurus.v9];
					break;
				case 9:
					neighbouringStars = [Taurus.v8];
					break;
				case 10:
					neighbouringStars = [Taurus.v12];
					break;
				case 11:
					neighbouringStars = [Taurus.v7, Taurus.v12];
					break;
				case 12:
					neighbouringStars = [Taurus.v11, Taurus.v3, Taurus.v10];
					break;
			}

			// Sends drawn lines to line array so that system knows when all lines have been drawn
			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 4 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 4)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 5 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 5)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 3 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 3)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 12 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 12)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 12 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 12)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 7 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 7)) {
				constellations[currentConstellation].line[8] = 1;
			}

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7)) {
				constellations[currentConstellation].line[9] = 1;
			}

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8)) {
				constellations[currentConstellation].line[10] = 1;
			}

			else if ((previousStar == 5 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 5)) {
				constellations[currentConstellation].line[11] = 1;
			}

			break;

		case 3: // Gemini
			switch (currentStar) {

				case 1:
					neighbouringStars = [Gemini.v2]
					break;

				case 2:
					neighbouringStars = [Gemini.v1, Gemini.v3]
					break;

				case 3:
					neighbouringStars = [Gemini.v2, Gemini.v4]
					break;

				case 4:
					neighbouringStars = [Gemini.v3, Gemini.v5, Gemini.v6]
					break;

				case 5:
					neighbouringStars = [Gemini.v4]
					break;

				case 6:
					neighbouringStars = [Gemini.v4, Gemini.v7, Gemini.v8, Gemini.v9]
					break;

				case 7:
					neighbouringStars = [Gemini.v6]
					break;

				case 8:
					neighbouringStars = [Gemini.v6]
					break;

				case 9:
					neighbouringStars = [Gemini.v6, Gemini.v11]
					break;

				case 10:
					neighbouringStars = [Gemini.v11]
					break;

				case 11:
					neighbouringStars = [Gemini.v9, Gemini.v10, Gemini.v12, Gemini.v13]
					break;

				case 12:
					neighbouringStars = [Gemini.v11]
					break;

				case 13:
					neighbouringStars = [Gemini.v11, Gemini.v14, Gemini.v15]
					break;

				case 14:
					neighbouringStars = [Gemini.v13, Gemini.v17]
					break;

				case 15:
					neighbouringStars = [Gemini.v13, Gemini.v16]
					break;

				case 16:
					neighbouringStars = [Gemini.v15]
					break;

				case 17:
					neighbouringStars = [Gemini.v14]
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 6 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 6)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 6 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 6)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 6 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 6)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 9 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 9)) {
				constellations[currentConstellation].line[8] = 1;
			}

			else if ((previousStar == 11 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 11)) {
				constellations[currentConstellation].line[9] = 1;
			}

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11)) {
				constellations[currentConstellation].line[10] = 1;
			}

			else if ((previousStar == 11 && currentStar == 13) ||
				(previousStar == 13 && currentStar == 11)) {
				constellations[currentConstellation].line[11] = 1;
			}

			else if ((previousStar == 13 && currentStar == 14) ||
				(previousStar == 14 && currentStar == 13)) {
				constellations[currentConstellation].line[12] = 1;
			}

			else if ((previousStar == 13 && currentStar == 15) ||
				(previousStar == 15 && currentStar == 13)) {
				constellations[currentConstellation].line[13] = 1;
			}

			else if ((previousStar == 14 && currentStar == 17) ||
				(previousStar == 17 && currentStar == 14)) {
				constellations[currentConstellation].line[14] = 1;
			}

			else if ((previousStar == 15 && currentStar == 16) ||
				(previousStar == 16 && currentStar == 15)) {
				constellations[currentConstellation].line[15] = 1;
			}

			break;

		case 4: // Cancer
			switch (currentStar) {

				case 1:
					neighbouringStars = [Cancer.v3]
					break;

				case 2:
					neighbouringStars = [Cancer.v3]
					break;

				case 3:
					neighbouringStars = [Cancer.v1, Cancer.v2, Cancer.v4]
					break;

				case 4:
					neighbouringStars = [Cancer.v3, Cancer.v5, Cancer.v6]
					break;

				case 5:
					neighbouringStars = [Cancer.v4]
					break;

				case 6:
					neighbouringStars = [Cancer.v4]
					break;
			}

			if ((previousStar == 1 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4)) {
				constellations[currentConstellation].line[4] = 1;
			}

			break;

		case 5: // Leo
			switch (currentStar) {

				case 1:
					neighbouringStars = [Leo.v2]
					break;

				case 2:
					neighbouringStars = [Leo.v1, Leo.v3]
					break;

				case 3:
					neighbouringStars = [Leo.v2, Leo.v4]
					break;

				case 4:
					neighbouringStars = [Leo.v3, Leo.v5, Leo.v7]
					break;

				case 5:
					neighbouringStars = [Leo.v4, Leo.v6]
					break;

				case 6:
					neighbouringStars = [Leo.v5, Leo.v8]
					break;

				case 7:
					neighbouringStars = [Leo.v4, Leo.v8, Leo.v9]
					break;

				case 8:
					neighbouringStars = [Leo.v6, Leo.v7, Leo.v9]
					break;

				case 9:
					neighbouringStars = [Leo.v7, Leo.v8]
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 5 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 5)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 4 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 4)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 6 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 6)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 7 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 7)) {
				constellations[currentConstellation].line[8] = 1;
			}

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8)) {
				constellations[currentConstellation].line[9] = 1;
			}
			break;

		case 6: // Virgo
			switch (currentStar) {

				case 1:
					neighbouringStars = [Virgo.v2];
					break;

				case 2:
					neighbouringStars = [Virgo.v1, Virgo.v3];
					break;

				case 3:
					neighbouringStars = [Virgo.v2, Virgo.v4, Virgo.v9];
					break;

				case 4:
					neighbouringStars = [Virgo.v3, Virgo.v5, Virgo.v6];
					break;

				case 5:
					neighbouringStars = [Virgo.v4];
					break;

				case 6:
					neighbouringStars = [Virgo.v4, Virgo.v7, Virgo.v9];
					break;

				case 7:
					neighbouringStars = [Virgo.v6, Virgo.v8];
					break;

				case 8:
					neighbouringStars = [Virgo.v7];
					break;

				case 9:
					neighbouringStars = [Virgo.v3, Virgo.v6, Virgo.v10];
					break;

				case 10:
					neighbouringStars = [Virgo.v9, Virgo.v11];
					break;

				case 11:
					neighbouringStars = [Virgo.v10, Virgo.v12];
					break;

				case 12:
					neighbouringStars = [Virgo.v11];
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 3 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 3)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 6 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 6)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 6 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 6)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7)) {
				constellations[currentConstellation].line[8] = 1;
			}

			else if ((previousStar == 9 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 9)) {
				constellations[currentConstellation].line[9] = 1;
			}

			else if ((previousStar == 10 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 10)) {
				constellations[currentConstellation].line[10] = 1;
			}

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11)) {
				constellations[currentConstellation].line[11] = 1;
			}

			break;

		case 7: // Libra
			switch (currentStar) {
				case 1:
					neighbouringStars = [Libra.v2, Libra.v5];
					break;

				case 2:
					neighbouringStars = [Libra.v1, Libra.v3];
					break;

				case 3:
					neighbouringStars = [Libra.v2, Libra.v4, Libra.v5];
					break;

				case 4:
					neighbouringStars = [Libra.v3];
					break;

				case 5:
					neighbouringStars = [Libra.v1, Libra.v3];
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 1 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 1)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 3 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 3)) {
				constellations[currentConstellation].line[4] = 1;
			}

			break;

		case 8: // Scorpius
			switch (currentStar) {

				case 1:
					neighbouringStars = [Scorpius.v4];
					break;

				case 2:
					neighbouringStars = [Scorpius.v4];
					break;

				case 3:
					neighbouringStars = [Scorpius.v4];
					break;

				case 4:
					neighbouringStars = [Scorpius.v1, Scorpius.v2, Scorpius.v3, Scorpius.v5];
					break;

				case 5:
					neighbouringStars = [Scorpius.v4, Scorpius.v6];
					break;

				case 6:
					neighbouringStars = [Scorpius.v5, Scorpius.v7];
					break;

				case 7:
					neighbouringStars = [Scorpius.v6, Scorpius.v8];
					break;

				case 8:
					neighbouringStars = [Scorpius.v7, Scorpius.v9];
					break;

				case 9:
					neighbouringStars = [Scorpius.v8, Scorpius.v10];
					break;

				case 10:
					neighbouringStars = [Scorpius.v9, Scorpius.v11];
					break;

				case 11:
					neighbouringStars = [Scorpius.v10, Scorpius.v12];
					break;

				case 12:
					neighbouringStars = [Scorpius.v11, Scorpius.v13];
					break;

				case 13:
					neighbouringStars = [Scorpius.v12];
					break;
			}

			if ((previousStar == 1 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 5 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 5)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 6 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 6)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 9 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 9)) {
				constellations[currentConstellation].line[8] = 1;
			}

			else if ((previousStar == 10 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 10)) {
				constellations[currentConstellation].line[9] = 1;
			}

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11)) {
				constellations[currentConstellation].line[10] = 1;
			}

			else if ((previousStar == 12 && currentStar == 13) ||
				(previousStar == 13 && currentStar == 12)) {
				constellations[currentConstellation].line[11] = 1;
			}

			break;

		case 9: // Sagittarius
			switch (currentStar) {

				case 1:
					neighbouringStars = [Sagittarius.v3];
					break;

				case 2:
					neighbouringStars = [Sagittarius.v4];
					break;

				case 3:
					neighbouringStars = [Sagittarius.v1, Sagittarius.v5, Sagittarius.v9];
					break;

				case 4:
					neighbouringStars = [Sagittarius.v2, Sagittarius.v5, Sagittarius.v6];
					break;

				case 5:
					neighbouringStars = [Sagittarius.v3, Sagittarius.v4, Sagittarius.v6, Sagittarius.v9];
					break;

				case 6:
					neighbouringStars = [Sagittarius.v4, Sagittarius.v5, Sagittarius.v7, Sagittarius.v8];
					break;

				case 7:
					neighbouringStars = [Sagittarius.v6];
					break;

				case 8:
					neighbouringStars = [Sagittarius.v6, Sagittarius.v9, Sagittarius.v15];
					break;

				case 9:
					neighbouringStars = [Sagittarius.v3, Sagittarius.v5, Sagittarius.v8, Sagittarius.v10];
					break;

				case 10:
					neighbouringStars = [Sagittarius.v9, Sagittarius.v11, Sagittarius.v15];
					break;

				case 11:
					neighbouringStars = [Sagittarius.v10, Sagittarius.v12];
					break;

				case 12:
					neighbouringStars = [Sagittarius.v11, Sagittarius.v13];
					break;

				case 13:
					neighbouringStars = [Sagittarius.v12, Sagittarius.v14];
					break;

				case 14:
					neighbouringStars = [Sagittarius.v13];
					break;

				case 15:
					neighbouringStars = [Sagittarius.v8, Sagittarius.v10, Sagittarius.v16];
					break;

				case 16:
					neighbouringStars = [Sagittarius.v15, Sagittarius.v17];
					break;

				case 17:
					neighbouringStars = [Sagittarius.v16, Sagittarius.v18];
					break;

				case 18:
					neighbouringStars = [Sagittarius.v17, Sagittarius.v19];
					break;

				case 19:
					neighbouringStars = [Sagittarius.v18, Sagittarius.v20, Sagittarius.v21];
					break;

				case 20:
					neighbouringStars = [Sagittarius.v19];
					break;

				case 21:
					neighbouringStars = [Sagittarius.v19];
					break;
			}

			if ((previousStar == 1 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 3 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 3)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 5 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 5)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 6 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 6)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 5 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 5)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 3 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 3)) {
				constellations[currentConstellation].line[8] = 1;
			}

			else if ((previousStar == 9 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 9)) {
				constellations[currentConstellation].line[9] = 1;
			}

			else if ((previousStar == 9 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 9)) {
				constellations[currentConstellation].line[10] = 1;
			}

			else if ((previousStar == 8 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 8)) {
				constellations[currentConstellation].line[11] = 1;
			}

			else if ((previousStar == 8 && currentStar == 15) ||
				(previousStar == 15 && currentStar == 8)) {
				constellations[currentConstellation].line[12] = 1;
			}

			else if ((previousStar == 15 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 15)) {
				constellations[currentConstellation].line[13] = 1;
			}

			else if ((previousStar == 15 && currentStar == 16) ||
				(previousStar == 16 && currentStar == 15)) {
				constellations[currentConstellation].line[14] = 1;
			}

			else if ((previousStar == 10 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 10)) {
				constellations[currentConstellation].line[15] = 1;
			}

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11)) {
				constellations[currentConstellation].line[16] = 1;
			}

			else if ((previousStar == 12 && currentStar == 13) ||
				(previousStar == 13 && currentStar == 12)) {
				constellations[currentConstellation].line[17] = 1;
			}

			else if ((previousStar == 13 && currentStar == 14) ||
				(previousStar == 14 && currentStar == 13)) {
				constellations[currentConstellation].line[18] = 1;
			}

			else if ((previousStar == 16 && currentStar == 17) ||
				(previousStar == 17 && currentStar == 16)) {
				constellations[currentConstellation].line[19] = 1;
			}

			else if ((previousStar == 17 && currentStar == 18) ||
				(previousStar == 18 && currentStar == 17)) {
				constellations[currentConstellation].line[20] = 1;
			}

			else if ((previousStar == 18 && currentStar == 19) ||
				(previousStar == 19 && currentStar == 18)) {
				constellations[currentConstellation].line[21] = 1;
			}

			else if ((previousStar == 19 && currentStar == 20) ||
				(previousStar == 20 && currentStar == 19)) {
				constellations[currentConstellation].line[22] = 1;
			}

			else if ((previousStar == 19 && currentStar == 21) ||
				(previousStar == 21 && currentStar == 19)) {
				constellations[currentConstellation].line[23] = 1;
			}

			break;

		case 10: // Capricornus
			switch (currentStar) {

				case 1:
					neighbouringStars = [Capricornus.v2];
					break;

				case 2:
					neighbouringStars = [Capricornus.v1, Capricornus.v3, Capricornus.v4];
					break;

				case 3:
					neighbouringStars = [Capricornus.v2];
					break;

				case 4:
					neighbouringStars = [Capricornus.v2, Capricornus.v5, Capricornus.v6, Capricornus.v7];
					break;

				case 5:
					neighbouringStars = [Capricornus.v4];
					break;

				case 6:
					neighbouringStars = [Capricornus.v4, Capricornus.v7];
					break;

				case 7:
					neighbouringStars = [Capricornus.v4, Capricornus.v6, Capricornus.v8];
					break;

				case 8:
					neighbouringStars = [Capricornus.v7, Capricornus.v9];
					break;

				case 9:
					neighbouringStars = [Capricornus.v8];
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1))
				constellations[currentConstellation].line[0] = 1;

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2))
				constellations[currentConstellation].line[1] = 1;

			else if ((previousStar == 2 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 2))
				constellations[currentConstellation].line[2] = 1;

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4))
				constellations[currentConstellation].line[3] = 1;

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4))
				constellations[currentConstellation].line[4] = 1;

			else if ((previousStar == 4 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 4))
				constellations[currentConstellation].line[5] = 1;

			else if ((previousStar == 7 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 7))
				constellations[currentConstellation].line[6] = 1;

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7))
				constellations[currentConstellation].line[7] = 1;

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8))
				constellations[currentConstellation].line[8] = 1;

			break;

		case 11: // Aquarius
			switch (currentStar) {

				case 1:
					neighbouringStars = [Aquarius.v2];
					break;

				case 2:
					neighbouringStars = [Aquarius.v1, Aquarius.v3];
					break;

				case 3:
					neighbouringStars = [Aquarius.v2, Aquarius.v4];
					break;

				case 4:
					neighbouringStars = [Aquarius.v3, Aquarius.v5, Aquarius.v11];
					break;

				case 5:
					neighbouringStars = [Aquarius.v4, Aquarius.v6, Aquarius.v7];
					break;

				case 6:
					neighbouringStars = [Aquarius.v5];
					break;

				case 7:
					neighbouringStars = [Aquarius.v5, Aquarius.v8];
					break;

				case 8:
					neighbouringStars = [Aquarius.v7, Aquarius.v9];
					break;

				case 9:
					neighbouringStars = [Aquarius.v8, Aquarius.v10];
					break;

				case 10:
					neighbouringStars = [Aquarius.v9];
					break;

				case 11:
					neighbouringStars = [Aquarius.v4, Aquarius.v12];
					break;

				case 12:
					neighbouringStars = [Aquarius.v11, Aquarius.v13];
					break;

				case 13:
					neighbouringStars = [Aquarius.v12, Aquarius.v14];
					break;

				case 14:
					neighbouringStars = [Aquarius.v13, Aquarius.v15];
					break;

				case 15:
					neighbouringStars = [Aquarius.v14, Aquarius.v16];
					break;

				case 16:
					neighbouringStars = [Aquarius.v15];
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1))
				constellations[currentConstellation].line[0] = 1;

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2))
				constellations[currentConstellation].line[1] = 1;

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3))
				constellations[currentConstellation].line[2] = 1;

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4))
				constellations[currentConstellation].line[3] = 1;

			else if ((previousStar == 4 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 4))
				constellations[currentConstellation].line[4] = 1;

			else if ((previousStar == 5 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 5))
				constellations[currentConstellation].line[5] = 1;

			else if ((previousStar == 5 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 5))
				constellations[currentConstellation].line[6] = 1;

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7))
				constellations[currentConstellation].line[7] = 1;

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8))
				constellations[currentConstellation].line[8] = 1;

			else if ((previousStar == 9 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 9))
				constellations[currentConstellation].line[9] = 1;

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11))
				constellations[currentConstellation].line[10] = 1;

			else if ((previousStar == 12 && currentStar == 13) ||
				(previousStar == 13 && currentStar == 12))
				constellations[currentConstellation].line[11] = 1;

			else if ((previousStar == 13 && currentStar == 14) ||
				(previousStar == 14 && currentStar == 13))
				constellations[currentConstellation].line[12] = 1;

			else if ((previousStar == 14 && currentStar == 15) ||
				(previousStar == 15 && currentStar == 14))
				constellations[currentConstellation].line[13] = 1;

			else if ((previousStar == 15 && currentStar == 16) ||
				(previousStar == 16 && currentStar == 15))
				constellations[currentConstellation].line[14] = 1;

			break;

		case 12: // Pisces
			switch (currentStar) {

				case 1:
					neighbouringStars = [Pisces.v2, Pisces.v5];
					break;

				case 2:
					neighbouringStars = [Pisces.v1, Pisces.v3];
					break;

				case 3:
					neighbouringStars = [Pisces.v2, Pisces.v4];
					break;

				case 4:
					neighbouringStars = [Pisces.v3, Pisces.v5, Pisces.v6];
					break;

				case 5:
					neighbouringStars = [Pisces.v1, Pisces.v4];
					break;

				case 6:
					neighbouringStars = [Pisces.v4, Pisces.v7];
					break;

				case 7:
					neighbouringStars = [Pisces.v6, Pisces.v8];
					break;

				case 8:
					neighbouringStars = [Pisces.v7, Pisces.v9];
					break;

				case 9:
					neighbouringStars = [Pisces.v8, Pisces.v10];
					break;

				case 10:
					neighbouringStars = [Pisces.v9, Pisces.v11];
					break;

				case 11:
					neighbouringStars = [Pisces.v10, Pisces.v12];
					break;

				case 12:
					neighbouringStars = [Pisces.v11, Pisces.v13];
					break;

				case 13:
					neighbouringStars = [Pisces.v12, Pisces.v14];
					break;

				case 14:
					neighbouringStars = [Pisces.v13, Pisces.v15];
					break;

				case 15:
					neighbouringStars = [Pisces.v14, Pisces.v16];
					break;

				case 16:
					neighbouringStars = [Pisces.v15, Pisces.v17, Pisces.v18];
					break;

				case 17:
					neighbouringStars = [Pisces.v16, Pisces.v18];
					break;

				case 18:
					neighbouringStars = [Pisces.v16, Pisces.v17];
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1))
				constellations[currentConstellation].line[0] = 1;

			else if ((previousStar == 1 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 1))
				constellations[currentConstellation].line[1] = 1;

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2))
				constellations[currentConstellation].line[2] = 1;

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3))
				constellations[currentConstellation].line[3] = 1;

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4))
				constellations[currentConstellation].line[4] = 1;

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4))
				constellations[currentConstellation].line[5] = 1;

			else if ((previousStar == 6 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 6))
				constellations[currentConstellation].line[6] = 1;

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7))
				constellations[currentConstellation].line[7] = 1;

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8))
				constellations[currentConstellation].line[8] = 1;

			else if ((previousStar == 9 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 9))
				constellations[currentConstellation].line[9] = 1;

			else if ((previousStar == 10 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 10))
				constellations[currentConstellation].line[10] = 1;

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11))
				constellations[currentConstellation].line[11] = 1;

			else if ((previousStar == 12 && currentStar == 13) ||
				(previousStar == 13 && currentStar == 12))
				constellations[currentConstellation].line[12] = 1;

			else if ((previousStar == 13 && currentStar == 14) ||
				(previousStar == 14 && currentStar == 13))
				constellations[currentConstellation].line[13] = 1;

			else if ((previousStar == 14 && currentStar == 15) ||
				(previousStar == 15 && currentStar == 14))
				constellations[currentConstellation].line[14] = 1;

			else if ((previousStar == 15 && currentStar == 16) ||
				(previousStar == 16 && currentStar == 15))
				constellations[currentConstellation].line[15] = 1;

			else if ((previousStar == 16 && currentStar == 17) ||
				(previousStar == 17 && currentStar == 16))
				constellations[currentConstellation].line[16] = 1;

			else if ((previousStar == 16 && currentStar == 18) ||
				(previousStar == 18 && currentStar == 16))
				constellations[currentConstellation].line[17] = 1;

			else if ((previousStar == 17 && currentStar == 18) ||
				(previousStar == 18 && currentStar == 17))
				constellations[currentConstellation].line[18] = 1;
			break;
	}

	// allLinesDrawn = method which returns true if all lines have been drawn
	const allLinesDrawn = (value) => value == 1;
	for (let i = 0; i < neighbouringStars.length; i++) {
		neighbouringStars[i][6] = 1;
	}

	if (constellations[currentConstellation].line.every(allLinesDrawn)) {
		constellations[currentConstellation].completed = 1;
		oneConstDone = 1;
		addConstellationToLibrary(currentConstellation);
		soundEffects(4); // "completed constellation" sound
	}

	if (constellations[currentConstellation].completed == 1) {
		isDrawing = false;
	}

}