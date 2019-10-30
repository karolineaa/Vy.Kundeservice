using Microsoft.EntityFrameworkCore.Migrations;

namespace Vy.Kundeservice.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FAQ",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Spørsmål = table.Column<string>(nullable: true),
                    Svar = table.Column<string>(nullable: true),
                    Rating = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FAQ", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "FAQ",
                columns: new[] { "Id", "Rating", "Spørsmål", "Svar" },
                values: new object[] { 1, 0, "Hva", "Dette" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FAQ");
        }
    }
}
