<?php

namespace App\Admin\Filter\Infrastructure\Controller;

use App\Core\Infrastructure\Entity\Filter;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class FilterCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Filter::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Filtre')
            ->setPageTitle('index', 'Filtres')
            ->setPageTitle('new', 'Ajouter un nouveau filtre')
            ->setPageTitle('edit', fn (Filter $filter) => 'Editer le filtre "'.$filter->getName().'"');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name', 'Nom'),
            TextField::new('icon', 'Icones (font awesome)')->onlyOnForms(),
            TextField::new('icon', 'Icones (font awesome)')
                ->onlyOnIndex()
                ->formatValue(function ($value, $entity) {
                    /** @var \App\Core\Infrastructure\Entity\Filter $entity */
                    $icon = $entity->getIcon();

                    if ($icon) {
                        return '<i class="'.htmlspecialchars($icon).'"></i>';
                    }

                    return '';
                })
                ->renderAsHtml(),
            BooleanField::new('active', 'Actif'),
            NumberField::new('position', "Ordre d'affichage")
        ];
    }
}
